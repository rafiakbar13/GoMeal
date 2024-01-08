import Heading from "@/src/common/components/Heading";
import PageHeading from "@/src/common/components/PageHeading";
import { Input } from "@/src/common/components/ui/input";
import Head from "next/head";
import React from "react";
import { FiSearch } from "react-icons/fi";
import DataTable from "./_components/data-table";
import { columns } from "./_components/columns";
import { Food } from "@prisma/client";
import { getData } from "@/src/common/lib/getData";
type Props = {
  food: Food[];
};

const MenuPage = async ({ food }: Props) => {
  const foods = await getData("food");
  return (
    <section className="px-10 py-10">
      <Heading title="Menu" className="text-zinc-800 text-3xl font-bold" />
      <PageHeading href="/dashboard/menu/new" linkTitle="Add Menu" />

      <DataTable columns={columns} data={foods} />
    </section>
  );
};

export default MenuPage;
