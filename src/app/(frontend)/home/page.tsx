import { authOptions } from "@/src/common/lib/authOptions";
import Dashboard from "@/src/module/user/Dashboard/index";
import { AuthOptions, NextAuthOptions, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const DashboardPage = async (props: Props) => {
  const session = await getServerSession(authOptions as NextAuthOptions);
  console.log("Session", session);
  if (!session) {
    if (!session) {
      redirect("/api/auth/signin?callbackUrl=/server");
    }
  }
  return (
    <>
      <Dashboard />
    </>
  );
};

export default DashboardPage;
