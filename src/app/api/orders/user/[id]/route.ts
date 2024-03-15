import { db } from "@/common/lib/db";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, { params }: any) {
  try {
    const userId = params.id;
    const orders = await db.order.findMany({
      // Menggunakan findMany untuk mendapatkan semua order
      where: {
        userId: userId, // Menggunakan params.id untuk mendapatkan userId dari permintaan
      },
      include: {
        fooditems: true,
      },
    });

    if (orders.length === 0) {
      // Memeriksa apakah tidak ada order ditemukan
      return NextResponse.json({ message: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(orders, { status: 200 }); // Mengembalikan semua order yang ditemukan
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to get Order",
      error,
    });
  }
}
