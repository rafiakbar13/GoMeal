import { db } from "@/common/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { getOrderStatusCount, getOrderCount } from "./getOrderCount";
export async function POST(req: Request, res: Response) {
  try {
    const { checkoutData, orderItems } = await req.json();
    const {
      city,
      district,
      email,
      firstName,
      lastName,
      paymentMethod,
      phone,
      shippingCost,
      streetAddress,
      userId,
      total,
    } = checkoutData;

    // Order Number
    const generateOrderNumber = (length: number) => {
      const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let orderNumber = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        orderNumber += characters.charAt(randomIndex);
      }

      return orderNumber;
    };

    let newOrder: {
      id: any;
      firstName?: string;
      lastName?: string;
      email?: string;
      phone?: string;
      orderStatus?: string | null;
      streetAddress?: string;
      city?: string | null;
      district?: string | null;
      paymentMethod?: string;
      orderNumber?: string | null;
      total?: number | null;
      shippingCost?: number;
      userId?: string;
      createdAt?: Date;
      updatedAt?: Date;
    };

    // Check if payment method is GoMealPay
    if (paymentMethod === "GoMealPay") {
      const user = await db.user.findUniqueOrThrow({ where: { id: userId } });
      const userBalance = user.balance;
      const subtotal = orderItems.reduce((acc: number, item: any) => {
        return acc + parseFloat(item.price) * parseInt(item.qty);
      }, 0);

      // Check if user has enough balance
      if (userBalance >= subtotal) {
        // Deduct balance from user
        await db.user.update({
          where: { id: userId },
          data: { balance: userBalance - subtotal },
        });

        // Create order after deduction
        newOrder = await db.order.create({
          data: {
            userId,
            firstName,
            lastName,
            email,
            phone,
            streetAddress,
            city,
            district,
            total: parseFloat(total),
            shippingCost: parseFloat(shippingCost),
            paymentMethod,
            orderNumber: generateOrderNumber(8),
          },
        });
      } else {
        // If user balance is insufficient, return error
        return NextResponse.json(
          { message: "Insufficient balance" },
          { status: 400 }
        );
      }
    } else {
      // If payment method is not GoMealPay, create order directly
      newOrder = await db.order.create({
        data: {
          userId,
          firstName,
          lastName,
          email,
          phone,
          streetAddress,
          city,
          district,
          total: parseFloat(total),
          shippingCost: parseFloat(shippingCost),
          paymentMethod,
          orderNumber: generateOrderNumber(8),
        },
      });
    }

    // Create order items
    const orderItemsData = await db?.foodOrder.createMany({
      data: orderItems.map((item: any) => ({
        foodId: item.id,
        quantity: parseInt(item.qty),
        price: parseFloat(item.price),
        orderId: newOrder.id,
        image: item.image,
        name: item.name,
      })),
    });
    console.log(newOrder, orderItemsData);

    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    console.log(error);
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
      include: {
        fooditems: {
          include: {
            food: true,
          },
        },
      },
    });

    // Popular Foods
    const foodCounts: any = {};

    // Iterasi melalui setiap pesanan dan fooditems
    orders.forEach((order: any) => {
      order.fooditems.forEach((fooditem: any) => {
        const foodName = fooditem.food.name;

        // Jika makanan sudah ada dalam foodCounts, tambahkan jumlahnya, jika tidak, inisialisasi dengan 1
        foodCounts[foodName] = (foodCounts[foodName] || 0) + 1;
      });
    });

    // Mengubah foodCounts menjadi array agar bisa diurutkan
    const popularFoods = Object.keys(foodCounts).map((foodName) => {
      return { name: foodName, count: foodCounts[foodName] };
    });

    // Mengurutkan makanan berdasarkan jumlah pesanan secara menurun
    popularFoods.sort((a, b) => b.count - a.count);

    // Revenue
    let revenue = 0;

    // Menjumlahkan total dari setiap pesanan
    orders.forEach((order: any) => {
      revenue += order?.total;
    });

    const orderCounts = await getOrderStatusCount();
    const getOrderCounts = await getOrderCount();
    return NextResponse.json(
      { orders, orderCounts, revenue, popularFoods },
      { status: 200 }
    );
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
