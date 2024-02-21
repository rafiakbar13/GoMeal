import { db } from "@/src/common/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
export async function POST(req: Request, res: Response) {
  try {
    // EXTRACT CREDENTIALS FROM REQUEST BODY
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
    const newUser = await db.user.create({
      data: {
        fullname,
        email,
        password: hashedPassword,
      },
    });
    console.log(newUser);
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
