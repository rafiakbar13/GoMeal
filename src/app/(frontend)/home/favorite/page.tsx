import { authOptions } from "@/common/lib/authOptions";
import { getData } from "@/common/lib/getData";
import Favorite from "@/module/user/Favorite";
import { AuthOptions, getServerSession } from "next-auth";
import React from "react";

const Favorites = async () => {
  const session = await getServerSession(authOptions as AuthOptions);
  const user = session?.user?.id;

  if (!session) return null;

  const favorite = await getData(`favorite/${user}`);

  return <Favorite data={favorite} />;
};

export default Favorites;
