import { db } from "@/src/common/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const { name, category, price, image } = await req.json();
    const existingFood = await db.food.findFirst({
      where: {
        name: { equals: name },
      },
    });
    if (existingFood) {
      return NextResponse.json(
        {
          message: "Food already exists",
        },
        { status: 409 }
      );
    }
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
  try {
    const food = await db.food.create({
      data: {
        name,
        price,
        image,
        category: {
          connect: {
            id: category,
          },
        },
      },
    });

    return NextResponse.json(food, { status: 201 });
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
