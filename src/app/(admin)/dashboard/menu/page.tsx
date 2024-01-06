import Heading from "@/src/common/components/Heading";
import PageHeading from "@/src/common/components/PageHeading";
import { Input } from "@/src/common/components/ui/input";
import Head from "next/head";
import React from "react";
import { FiSearch } from "react-icons/fi";

type Props = {};

const MenuPage = (props: Props) => {
  return (
    <section className="px-10 py-10">
      <Heading title="Menu" className="text-zinc-800 text-3xl font-bold" />
      <PageHeading href="/dashboard/menu/new" linkTitle="Add Menu" />

      <div>Table</div>
    </section>
  );
};

export default MenuPage;
