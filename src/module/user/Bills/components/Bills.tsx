import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/common/components/data-table/data-table";
import { AuthOptions, getServerSession } from "next-auth";
import { getData } from "@/common/lib/getData";
import { authOptions } from "@/common/lib/authOptions";
import { DefaultSession } from "next-auth";
interface SessionProps extends DefaultSession {
  user: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
    id: string | null | undefined;
  };
}

const Bills = async () => {
  const session: SessionProps | null = await getServerSession(
    authOptions as AuthOptions
  );
  const user = session?.user?.id;
  const bills = await getData(`orders/user/${user}`);
  console.log(bills);

  return (
    <section className="mx-6 my-8">
      <article className="flex flex-col gap-y-5">
        <h1 className="text-zinc-800 text-3xl font-bold font-['Poppins']">
          Bills
        </h1>
        <DataTable columns={columns} data={bills} />
      </article>
    </section>
  );
};

export default Bills;
