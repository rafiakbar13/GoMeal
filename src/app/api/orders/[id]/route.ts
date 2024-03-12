import { db } from "@/common/lib/db";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET({ params: { id } }: any) {
  try {
    const order = await db.order.findUnique({
      where: {
        id,
      },
      include: {
        fooditems: true,
      },
    });
    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch order",
        error,
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE({ params: { id } }: any) {
  try {
    const existingOrder = await db.order.findUnique({
      where: {
        id,
      },
    });
    if (!existingOrder) {
      return NextResponse.json(
        {
          message: "Order not found",
        },
        {
          status: 404,
        }
      );
    }
    const deleteOrder = await db.order.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deleteOrder, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch order",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
