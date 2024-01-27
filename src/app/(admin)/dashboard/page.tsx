import Heading from "@/src/common/components/Heading";
import { Input } from "@/src/common/components/ui/input";
import React from "react";
import { FiSearch } from "react-icons/fi";
import Dashboard from "@/src/module/admin/dashboard";
type Props = {};

const DashboardPage = (props: Props) => {
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
