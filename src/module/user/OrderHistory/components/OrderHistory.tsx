import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/common/components/data-table/data-table";
import { getData } from "@/common/lib/getData";
import { AuthOptions, getServerSession } from "next-auth";
import { authOptions } from "@/common/lib/authOptions";
const OrderHistory = async () => {
  const session = await getServerSession(authOptions as AuthOptions);
  if (!session) return null;
  const userId = session?.user?.id;
  const order = await getData(`orders/user/${userId}`);

  return (
    <section className="mx-6 my-8">
      <article className="flex flex-col gap-y-5">
        <h1 className="text-zinc-800 text-3xl font-bold font-['Poppins']">
          Order History
        </h1>
        <DataTable columns={columns} data={order} />
      </article>
    </section>
  );
};

export default OrderHistory;
