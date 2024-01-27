import React from "react";
import Income from "./Income";
import OrderReport from "./OrderReport";
import OrderRate from "./OrderRate";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <>
      {/* Total Income */}
      <Income />
      {/* Informasi Order */}
      <OrderReport />
      {/* Order Rate */}
      <OrderRate />
    </>
  );
};

export default Dashboard;
