import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import Heading from "./Heading";
import { Button } from "./ui/button";

type Props = {
  title: string;
};

const FormHeader = ({ title }: Props) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between py-6 px-12 bg-white text-slate-800 dark:text-slate-50 dark:bg-slate-700 rounded-lg shadow-md mb-12">
      <Heading title={title} className="text-xl font-bold text-zinc-800" />
      <Button onClick={() => router.back()} className="" variant={"ghost"}>
        <X />
      </Button>
    </div>
  );
};

export default FormHeader;
