import { RefreshCcw } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../../ui/button";

type Props = {
  row: any;
  endpoint: string;
  title: string;
};

const EditBtn = ({ row, endpoint, title }: Props) => {
  return (
    <Link
      href={`/dashboard/${endpoint}/update/${
        (row?.original as { id: string }).id
      }`}
    >
      <Button
        variant="ghost"
        className="bg-sky-500 hover:bg-sky-600 w-full text-white hover:text-white"
      >
        <RefreshCcw className="w-4 h-4" />
        <span className="ml-3">Update {title}</span>
      </Button>
    </Link>
  );
};

export default EditBtn;
