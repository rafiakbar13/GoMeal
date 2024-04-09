import { getData } from "@/common/lib/api";
import Bills from "@/module/user/Bills";
import { getServerSession } from "next-auth";
import React from "react";

const BillsPage = async () => {
  return <Bills />;
};

export default BillsPage;
