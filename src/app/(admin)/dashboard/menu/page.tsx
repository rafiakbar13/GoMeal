"use client";
import Heading from "@/common/components/Heading";
import PageHeading from "@/common/components/PageHeading";
import React from "react";
import { DataTable } from "@/common/components/data-table/data-table";
import { columns } from "./columns";
import { Food } from "@prisma/client";
import { getData } from "@/common/lib/getData";
type Props = {
  food: Food[] & { category: { name: string } }[];
};

const MenuPage = async ({ food }: Props) => {
  const foods = await getData("menu");

  return (
    <section className="px-10 py-10">
      <Heading title="Menu" className="text-zinc-800 text-3xl font-bold" />
      <PageHeading href="/dashboard/menu/new" linkTitle="Add Menu" />

      <DataTable columns={columns} data={foods} />
    </section>
  );
};

export default MenuPage;
