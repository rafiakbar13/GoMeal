import React from "react";
import { HistoryData } from "@/src/common/constants/OrderHistory";
import { columns } from "./columns";
import DataTable from "./data-table";
const OrderHistory = () => {
  return (
    <section className="mx-6 my-8">
      <article className="flex flex-col gap-y-5">
        <h1 className="text-zinc-800 text-3xl font-bold font-['Poppins']">
          Order History
        </h1>
        <DataTable columns={columns} data={HistoryData} />
      </article>
    </section>
  );
};

export default OrderHistory;
