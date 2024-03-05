import { db } from "@/common/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { userId, balance } = await req.json();
    const updatedUser = await db.user.update({
      where: {
        id: userId,
      },
      data: {
        balance: { increment: balance },
      },
    });
    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}
