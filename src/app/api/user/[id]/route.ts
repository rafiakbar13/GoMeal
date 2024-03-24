import { NextRequest, NextResponse } from "next/server";
import { db } from "@/common/lib/db";
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
