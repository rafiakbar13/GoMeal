import { db } from "@/common/lib/db";
import { NextApiRequest } from "next";
import { revalidatePath } from "next/cache";

import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, { params }: any) {
  try {
    const id = params.id;
    const categories = await db.category.findUnique({
      where: {
        id: id as string,
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

export async function DELETE(req: any, { params }: any) {
  try {
    const id = params.id;
    const categories = await db.category.delete({
      where: {
        id: id as string,
      },
    });
    return NextResponse.json({ message: "Food deleted successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to delete categories",
      error,
    });
  }
}

export async function PUT(req: any, { params }: any) {
  try {
    const id = params.id;
    const { name, image } = await req.json();
    const categories = await db.category.update({
      where: {
        id: id as string,
      },
      data: {
        name,
        image,
      },
    });
    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to update categories",
      error,
    });
  }
}
