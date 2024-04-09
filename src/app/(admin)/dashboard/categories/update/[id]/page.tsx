import { getData } from "@/common/lib/api";
import React from "react";
import UpdateCategoriesForm from "./_components/UpdateForm";
import { useRouter } from "next/navigation";
type Props = {};

const UpdateCategories = async (props: Props) => {
  const categories = await getData("categories");

  return <UpdateCategoriesForm categories={categories} />;
};

export default UpdateCategories;
