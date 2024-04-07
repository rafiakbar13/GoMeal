import Heading from "@/common/components/Heading";
import PageHeading from "@/common/components/PageHeading";
import { DataTable } from "@/common/components/data-table/data-table";
import React, { Suspense } from "react";
import { columns } from "./columns";
import { getData } from "@/common/lib/getData";
type Props = {};

const Orders = async (props: Props) => {
  const getOrders = await getData("orders");
  const { orders } = getOrders;

  return (
    <section className="px-10 py-10">
      <Heading title="Menu" className="text-zinc-800 text-3xl font-bold" />
      <Suspense fallback={<div>Loading...</div>}>
        <DataTable columns={columns} data={orders} />
      </Suspense>
    </section>
  );
};

export default Orders;
