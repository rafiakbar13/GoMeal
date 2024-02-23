import { db } from "@/src/common/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";
import base64url from "base64url";
import { Resend } from "resend";
import EmailTemplate from "@/src/common/components/EmailTemplate";
export async function POST(req: Request, res: Response) {
  try {
    // EXTRACT CREDENTIALS FROM REQUEST BODY
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { fullname, email, password } = await req.json();

    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: "User already exists",
        },
        { status: 409 }
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const rawToken = uuidv4();
    const token = base64url.encode(rawToken);

    const newUser = await db.user.create({
      data: {
        fullname,
        email,
        password: hashedPassword,
        verificationToken: token,
      },
    });
    console.log(newUser);
    // SEND VERIFICATION EMAIL
    const userId = newUser.id;
    const linkText = "Verify Account";
    const redirectUrl = `onboarding/${userId}?token=${token}`;
    const sendMail = await resend.emails.send({
      from: "Desishub <info@gomeal.com>",
      to: email,
      subject: "Verify your email",
      react: EmailTemplate({
        name: fullname,
        redirectUrl,
        linkText,
      }),
      text: "Verify your email",
    });
    console.log(sendMail);
    const updatedUser = await db.user.update({
      where: {
        id: newUser.id,
      },
      data: {
        emailVerified: true,
      },
    });
    console.log(updatedUser);
    return NextResponse.json(
      {
        data: newUser,
        message: "User created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Something went wrong",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(req: Request, res: Response) {
  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to get users",
        error,
      },
      { status: 500 }
    );
  }
}
