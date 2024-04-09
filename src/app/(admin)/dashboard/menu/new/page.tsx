import React from "react";
import NewMenuForm from "../_components/NewMenuForm";
import { getData } from "@/common/lib/api";
type Props = {};

const MenuPage = async (props: Props) => {
  const categories = await getData("categories");

  return <NewMenuForm categories={categories} />;
};

export default MenuPage;
