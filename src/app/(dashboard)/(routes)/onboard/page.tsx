import { authOptions } from "@/src/common/lib/authOptions";
import Dashboard from "@/src/module/user/Dashboard/index";
import { log } from "console";
import { AuthOptions, getServerSession } from "next-auth";
import React from "react";

type Props = {};

const DashboardPage = async (props: Props) => {
  const session = await getServerSession(authOptions as AuthOptions);
  log("Session", session?.user);

  return (
    <>
      <Dashboard />
    </>
  );
};

export default DashboardPage;
