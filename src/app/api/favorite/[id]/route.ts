import { db } from "@/common/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: any, { params }: any) {
  const id = params.id;

  try {
    const user = await db.user.findUnique({
      where: { id: id },
      include: { favoriteFoods: true },
    });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user.favoriteFoods, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching favorite foods:", error.message);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
