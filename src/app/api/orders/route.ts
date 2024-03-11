import { db } from "@/common/lib/db";
import { Item } from "@radix-ui/react-dropdown-menu";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const { checkoutData, orderItems } = await req.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      paymentMethod,
      streetAddress,
      shippingCost,
      userId,
      total,
    } = checkoutData;
    const newOrder = await db.order.create({
      data: {
        userId,
        firstName,
        lastName,
        email,
        phone,
        paymentMethod,
        streetAddress,
        shippingCost: parseFloat(shippingCost),
        orderStatus: "pending", // Add the missing property 'orderStatus'
        total: parseFloat(total),
      },
    });
    // Create order items
    const orderItemsData = await db?.foodOrder.createMany({
      data: orderItems.map((item: any) => ({
        foodId: item.id,
        quantity: parseInt(item.qty),
        price: parseFloat(item.price),
        // orderId: item.id,
        orderId: newOrder.id,
      })),
    });
    console.log(newOrder, orderItemsData);

    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const orders = await db.order.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(orders, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch orders",
        error,
      },
      {
        status: 500,
      }
    );
  }
}
