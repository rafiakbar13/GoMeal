import React from "react";
import Setting from "@/module/user/Settings";
import { AuthOptions, getServerSession } from "next-auth";
import { authOptions } from "@/common/lib/authOptions";
import { getData } from "@/common/lib/getData";
type Props = {};

const Settings = async (props: Props) => {
  const session = await getServerSession(authOptions as AuthOptions);
  const users = session?.user?.id;
  const user = await getData(`/user/${users}`);
  console.log(user);

  return <Setting user={user} />;
};

export default Settings;
