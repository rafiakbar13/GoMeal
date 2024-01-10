"use client";
import { Row } from "@tanstack/react-table";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/src/common/components/ui/dropdown-menu";
import { Button } from "@/src/common/components/ui/button";
import { MoreHorizontal, RefreshCcw, Trash2 } from "lucide-react";
interface DataTableRowActionsProps<TData> {
  row?: Row<TData>;
  onDelete?: () => void;
  onUpdate?: () => void;
}

export const DataTableRowActions = <TData extends {}>({
  row,
  onDelete,
  onUpdate,
}: DataTableRowActionsProps<TData>) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem>
          <Button variant="destructive" className="w-full" onClick={onDelete}>
            <Trash2 className="h-4 w-4" />
            <span className="ml-3">Delete</span>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Button
            className="w-full bg-sky-500 hover:bg-sky-600"
            onClick={onUpdate}
          >
            <RefreshCcw className="w-4 h-4" />
            <span className="ml-3">Update</span>
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
