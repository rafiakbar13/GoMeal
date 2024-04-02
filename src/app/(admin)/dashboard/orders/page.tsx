import Heading from "@/common/components/Heading";
import PageHeading from "@/common/components/PageHeading";
import { DataTable } from "@/common/components/data-table/data-table";
import React, { Suspense } from "react";
import { columns } from "./columns";
import { getData } from "@/common/lib/getData";
type Props = {};

const Orders = async (props: Props) => {
  const orders = await getData("orders");
  return (
    <section className="px-10 py-10">
      <Heading title="Menu" className="text-zinc-800 text-3xl font-bold" />
      <PageHeading href="/dashboard/menu/new" linkTitle="Add Menu" />
      <Suspense fallback={<div>Loading...</div>}>
        <DataTable columns={columns} data={orders} />
      </Suspense>
    </section>
  );
};

export default Orders;

/*
order 
user : rafi
food : nasi goreng (1), ayam goreng (1), es teh (1) (relasi dengan model food)
total : 35000
deliveryAddress : jl. abc no. 123
status : pending
payment : cash
*/
