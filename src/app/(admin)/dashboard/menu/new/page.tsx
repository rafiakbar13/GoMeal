import React from "react";
import NewMenuForm from "../_components/NewMenuForm";
import { getData } from "@/src/common/lib/getData";
type Props = {};

const MenuPage = async (props: Props) => {
  const categories = await getData("categories");
  console.log(categories);

  return <NewMenuForm categories={categories} />;
};

export default MenuPage;
