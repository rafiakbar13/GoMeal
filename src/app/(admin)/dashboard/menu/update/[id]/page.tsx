import { getData } from "@/common/lib/getData";
import React from "react";
import UpdateCategoriesForm from "./_components/UpdateForm";
import { useRouter } from "next/navigation";
import UpdateMenuForm from "./_components/UpdateForm";
type Props = {};

const UpdateMenu = async (props: Props) => {
  const food = await getData("menu");
  const categories = await getData("categories");
  return <UpdateMenuForm food={food} categories={categories} />;
};

export default UpdateMenu;
