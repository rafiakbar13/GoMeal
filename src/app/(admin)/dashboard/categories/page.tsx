import Heading from "@/src/common/components/Heading";
import PageHeading from "@/src/common/components/PageHeading";
import React from "react";

type Props = {};

const CategoriesPage = (props: Props) => {
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

      <div>Table</div>
    </section>
  );
};

export default CategoriesPage;
