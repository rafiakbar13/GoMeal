import React from "react";
import Income from "./Income";
import OrderReport from "./OrderReport";
import OrderRate from "./OrderRate";
import { getData } from "@/common/lib/getData";

type Props = {};

const Dashboard = async (props: Props) => {
  const orders = await getData("orders");
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
