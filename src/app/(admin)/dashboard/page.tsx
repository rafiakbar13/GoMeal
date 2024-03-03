import Heading from "@/common/components/Heading";
import { Input } from "@/common/components/ui/input";
import React from "react";
import { FiSearch } from "react-icons/fi";
import Dashboard from "@/module/admin/dashboard";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
type Props = {};

const DashboardPage = async (props: Props) => {
  // const session = await getServerSession();
  // if (!session && session?.user !== "ADMIN") {
  //   redirect("/api/auth/signin?callbackUrl=/server");
  // }
  return (
    <section className="px-10 py-10">
      <header className="flex justify-between">
        <Heading
          title="Dashboard"
          className="text-zinc-800 text-3xl font-bold"
        />
      </header>
      <main>
        <Dashboard />
      </main>
    </section>
  );
};

export default DashboardPage;
