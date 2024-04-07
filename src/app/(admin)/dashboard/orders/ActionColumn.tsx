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
import AcceptButton from "@/common/components/data-table/actions/AcceptBtn";
import RejectButton from "@/common/components/data-table/actions/RejectBtn";
import DeliveredButton from "@/common/components/data-table/actions/DeliveredBtn";
import CompletedButton from "@/common/components/data-table/actions/CompleteBtn";

type Props = {
  row: any;
  title: string;
  endpoint: string;
};

const ActionColumn = ({ row, title, endpoint }: Props) => {
  const status = row.original.orderStatus;

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
          <AcceptButton status={status} title={title} endpoint={endpoint} />
          <RejectButton status={status} title={title} endpoint={endpoint} />
          <DeliveredButton status={status} title={title} endpoint={endpoint} />
          <CompletedButton status={status} title={title} endpoint={endpoint} />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionColumn;
