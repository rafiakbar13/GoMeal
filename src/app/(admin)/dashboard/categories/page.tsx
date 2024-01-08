import Heading from "@/src/common/components/Heading";
import PageHeading from "@/src/common/components/PageHeading";
import React from "react";
import DataTable from "./_components/data-table";
import { columns } from "./_components/columns";
import { getData } from "@/src/common/lib/getData";
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
