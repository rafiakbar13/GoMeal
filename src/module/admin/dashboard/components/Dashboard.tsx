import React from "react";
import Income from "./Income";
import OrderReport from "./OrderReport";
import OrderRate from "./OrderRate";
import { getData } from "@/common/lib/api";

interface OrderResponse {
  orderCounts: {
    pending: number;
    delivered: number;
    completed: number;
    cancelled: number;
  };
  revenue: number;
  popularFoods: {
    name: string;
    count: number;
  }[];
}

const Dashboard = async (): Promise<JSX.Element> => {
  const orders: OrderResponse = await getData("orders");
  const { orderCounts, revenue, popularFoods } = orders;

  return (
    <>
      {/* Total Income */}
      <Income revenue={revenue} />
      {/* Informasi Order */}
      <OrderReport orderCounts={orderCounts} popularFoods={popularFoods} />
      {/* Order Rate */}
      <OrderRate />
    </>
  );
};

export default Dashboard;
