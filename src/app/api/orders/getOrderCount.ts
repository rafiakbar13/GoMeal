import { db } from "@/common/lib/db";
export async function getOrderStatusCount() {
  try {
    const pendingCount = await db.order.count({
      where: {
        orderStatus: "PENDING",
      },
    });
    const deliveredCount = await db.order.count({
      where: {
        orderStatus: "DELIVERED",
      },
    });
    const cancelledCount = await db.order.count({
      where: {
        orderStatus: "CANCELLED",
      },
    });

    return {
      pending: pendingCount,
      delivered: deliveredCount,
      cancelled: cancelledCount,
    };
  } catch (error) {
    console.error("Failed to get order counts:", error);
    throw new Error("Failed to get order counts");
  }
}

export async function getOrderCount() {
  try {
    const orders = await db.order.findMany({
      include: {
        fooditems: {
          include: {
            food: {
              include: {
                category: true,
              },
            },
          },
        },
      },
    });
    const categoryCount: { [key: string]: number } = {
      burger: 0,
    };
    orders.forEach((order) => {
      order.fooditems.forEach((item) => {
        const category = item.food.category.name.toLowerCase();
        categoryCount[category]++;
      });
    });
    return {
      burger: categoryCount.burger,
    };
  } catch (error) {
    console.error("Failed to get order counts:", error);
    throw new Error("Failed to get order counts");
  }
}
