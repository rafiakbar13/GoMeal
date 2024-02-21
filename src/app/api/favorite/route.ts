import { db } from "@/src/common/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: any, res: any) {
  const { userId, foodId } = await req.json();

  try {
    const user = await db.user.findUnique({
      where: { id: userId },
      include: { favoriteFoods: true },
    });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const food = await db.food.findUnique({ where: { id: foodId } });
    if (!food) {
      return NextResponse.json({ message: "Food not found" }, { status: 404 });
    }

    const isFavorited = user.favoriteFoods.some((food) => food.id === foodId);
    if (isFavorited) {
      return NextResponse.json(
        { message: "Food already favorited by user" },
        { status: 400 }
      );
    }

    const updatedUser = await db.user.update({
      where: { id: userId },
      data: {
        favoriteFoods: {
          connect: { id: foodId },
        },
      },
      include: { favoriteFoods: true },
    });

    const addedFood = updatedUser.favoriteFoods.find((f) => f.id === foodId);

    const favorite = {
      userId: updatedUser.id,
      userName: updatedUser.fullname,
      foodId: addedFood?.id,
      foodName: addedFood?.name,
    };

    return NextResponse.json(favorite, { status: 200 });
  } catch (error: any) {
    // Tangani kesalahan
    console.error("Error favoriting food:", error.message);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
