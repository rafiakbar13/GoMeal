import { NextRequest, NextResponse } from "next/server";
import { db } from "@/common/lib/db";
import bcrypt from "bcrypt";
export async function GET(req: NextRequest, { params }: any) {
  try {
    const id = params.id;
    const user = await db.user.findUnique({
      where: {
        id: id,
      },
    });
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to get User",
      error,
    });
  }
}

export async function PATCH(req: NextRequest, { params }: any) {
  try {
    const id = params.id;
    const { fullname, address, email, password, image } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await db.user.update({
      where: {
        id: id,
      },
      data: {
        fullname,
        address,
        email,
        password: hashedPassword,
        image,
      },
    });
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to update User",
      error,
    });
  }
}
