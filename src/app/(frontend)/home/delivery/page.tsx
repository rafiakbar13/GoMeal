import React from "react";
import OrderFood from "@/module/user/FoodOrder";
import { AuthOptions, getServerSession } from "next-auth";
import { authOptions } from "@/common/lib/authOptions";
import { getData } from "@/common/lib/api";
import { DefaultSession } from "next-auth";
type Props = {};

const FoodOrder = async () => {
  const session = await getServerSession(authOptions as AuthOptions);
  if (!session) return null;
  const userId = session.user?.id;
  const order = await getData(`orders/user/${userId}`);
  return <OrderFood data={order} />;
};

export default FoodOrder;
