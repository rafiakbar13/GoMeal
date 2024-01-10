import { db } from "@/src/common/lib/db";
import { NextApiRequest } from "next";

import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, { params }: any) {
  try {
    const id = params.id;
    const food = await db.food.findUnique({
      where: {
        id: id as string,
      },
    });
    return NextResponse.json(food, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to get food",
      error,
    });
  }
}

export async function DELETE(req: any, { params }: any) {
  try {
    const id = params.id;
    const food = await db.food.delete({
      where: {
        id: id as string,
      },
    });
    return NextResponse.json({ message: "Food deleted successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to delete food",
      error,
    });
  }
}
