// Import PrismaClient
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

import { db } from "@/common/lib/db";

export async function POST(request: NextRequest) {
  try {
    const { checkoutFormData, orderItems } = await request.json();
    const {
      city,
      country,
      district,
      email,
      firstName,
      lastName,
      paymentMethod,
      phone,
      shippingCost,
      streetAddress,
      userId,
    } = checkoutFormData;

    // Create orderNumber function
    const generateOrderNumber = (length: number) => {
      const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let orderNumber = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        orderNumber += characters.charAt(randomIndex);
      }

      return orderNumber;
    };

    // Use Prisma transaction to ensure both queries are successful or rolled back
    const result = await db.$transaction([
      db.order.create({
        data: {
          userId,
          firstName,
          lastName,
          email,
          phone,
          streetAddress,
          city,
          district,
          shippingCost: parseFloat(shippingCost),
          paymentMethod,
          orderNumber: generateOrderNumber(8),
        },
      }),
      db.order.createMany({
        data: orderItems.map((item: any) => ({
          productId: item.id,
          quantity: parseInt(item.qty),
          price: parseFloat(item.salePrice),
          imageUrl: item.imageUrl,
          title: item.title,
        })),
      }),
    ]);

    const [newOrder, newOrderItems] = result;

    console.log(newOrder, newOrderItems);

    return NextResponse.json(newOrder);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Failed to create Order",
        error,
      },
      { status: 500 }
    );
  } finally {
    // Close the Prisma client connection
    await db.$disconnect();
  }
}
