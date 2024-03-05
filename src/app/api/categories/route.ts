import { db } from "@/common/lib/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const { name, image } = await req.json();
    const existingCategory = await db.category.findUnique({
      where: {
        id: name,
      },
    });
    if (existingCategory) {
      return NextResponse.json(
        {
          message: "Category already exists",
        },
        { status: 409 }
      );
    }
    const newCategory = await db.category.create({
      data: {
        name,
        image,
      },
    });
    console.log(newCategory);
    return NextResponse.json(newCategory, { status: 201 });
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
    const categories = await db.category.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to get categories",
      error,
    });
  }
}
