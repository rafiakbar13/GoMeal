import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/common/components/ui/dropdown-menu";
import { Button } from "@/common/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import DeleteBtn from "../actions/DeleteBtn";
import EditBtn from "../actions/EditBtn";
type Props = {
  row: any;
  title: string;
  endpoint: string;
};

const ActionColumn = ({ row, title, endpoint }: Props) => {
  const isActive = row.original.isActive;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="flex flex-col space-y-2">
          <DeleteBtn title={title} endpoint={endpoint} />
          <EditBtn
            row={row}
            endpoint={title.toLocaleLowerCase()}
            title={title}
          />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionColumn;
