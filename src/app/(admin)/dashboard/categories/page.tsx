import Heading from "@/common/components/Heading";
import PageHeading from "@/common/components/PageHeading";
import React from "react";
import { DataTable } from "@/common/components/data-table/data-table";
import { columns } from "./columns";
import { getData } from "@/common/lib/api";
import { Category } from "@prisma/client";
type Props = {
  category: Category[];
};

const CategoriesPage = async ({ category }: Props) => {
  const categories = await getData("categories");
  return (
    <section className="px-10 py-10">
      <Heading
        title="Categories"
        className="text-zinc-800 text-3xl font-bold"
      />
      <PageHeading
        href="/dashboard/categories/new"
        linkTitle="Add Categories"
      />

      <DataTable columns={columns} data={categories} />
    </section>
  );
};

export default CategoriesPage;
