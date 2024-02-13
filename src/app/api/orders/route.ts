import { db } from "@/src/common/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const { user, foods, total, deliveryAddress, status, payment } =
      await req.json();
    const order = await db.order.create({
      data: {
        user: {
          connect: {
            id: user,
          },
        },
        fooditems: {
          connect: foods,
        },
        total,
        deliveryAddress,
        status,
        paymentMethod: payment,
      },
    });
    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
