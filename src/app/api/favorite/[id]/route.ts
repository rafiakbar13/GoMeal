import { db } from "@/common/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
  const id = params.id;
  const searchParams = req.nextUrl.searchParams;
  const name = searchParams.get("name");
  console.log(name);

  try {
    const user = await db.user.findUnique({
      where: { id },
      select: {
        favoriteFoods: {
          where: {
            name: {
              contains: name?.toString(),
              mode: "insensitive",
            },
          },
        },
      },
    });

    console.log(user);

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

export async function DELETE(req: NextRequest, { params }: any) {
  const { userId, foodId } = await req.json();
  try {
    const user = await db.user.findUnique({
      where: { id: userId },
      include: { favoriteFoods: true },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const updatedUser = await db.user.update({
      where: { id: userId },
      data: {
        favoriteFoods: {
          disconnect: { id: foodId },
        },
      },
      include: { favoriteFoods: true },
    });

    return NextResponse.json(updatedUser.favoriteFoods as any, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json("Internal Server Error", { status: 500 });
  }
}
