import { db } from "@/src/common/lib/db";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";
export async function POST(req: Request, res: Response) {
  try {
    const { name, categories, price, image, description } = await req.json();
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
    const food = await db.food.create({
      data: {
        name,
        price,
        image,
        description,
        category: {
          connect: {
            id: categories,
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

export async function GET(req: Request, res: Response) {
  try {
    const food = await db.food.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
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
