import { db } from "@/common/lib/db";
import { NextRequest } from "next";

import { NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
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
    return NextResponse.json(
      { message: "Food deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to delete food",
      error,
    });
  }
}

export async function PUT(req: any, { params }: any) {
  try {
    const id = params.id;
    const { name, image, price, category } = await req.json();
    const food = await db.food.update({
      where: {
        id: id as string,
      },
      data: {
        name,
        image,
        price,
        category,
      },
    });
    return NextResponse.json(food, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to update food",
      error,
    });
  }
}
