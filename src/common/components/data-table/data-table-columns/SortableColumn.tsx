import { Button } from "@/common/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import React from "react";

type Props = {};

const SortableColumn = ({ column, title }: any) => {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {title}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
};

export default SortableColumn;
