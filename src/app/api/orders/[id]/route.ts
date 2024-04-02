import { db } from "@/common/lib/db";
import { NextApiRequest } from "next";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextApiRequest, { params }: any) {
  try {
    const id = params.id;
    const order = await db.order.findUnique({
      where: {
        id: id,
      },
      include: {
        fooditems: true,
      },
    });
    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to get Order",
      error,
    });
  }
}

export async function DELETE(req: any, { params }: any) {
  try {
    const id = params.id;
    const order = await db.order.delete({
      where: {
        id: id as string,
      },
    });
    return NextResponse.json({ message: "Order deleted successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to delete Order",
      error,
    });
  }
}

export async function PUT(req: any, { params }: any) {
  try {
    const id = params.id;
    const { status } = await req.json();
    const order = await db.order.update({
      where: {
        id: id as string,
      },
      data: {
        orderStatus: status,
      },
    });
    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to update categories",
      error,
    });
  }
}
