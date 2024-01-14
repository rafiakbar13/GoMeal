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
import { deleteData } from "@/src/common/lib/getData";
import { revalidatePath } from "next/cache";
import Link from "next/link";
interface DataTableRowActionsProps<TData> {
  row?: Row<TData>;
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const handleDelete = async (id: string) => {
    const res = await deleteData(`categories/${id}`);
    return res;
  };

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
          <Button
            variant="destructive"
            className="w-full"
            onClick={() => handleDelete((row?.original as { id: string })?.id)}
          >
            <Trash2 className="h-4 w-4" />
            <span className="ml-3">Delete</span>
          </Button>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link
            href={`/dashboard/categories/update/${
              (row?.original as { id: string }).id
            }`}
            className="w-full bg-sky-500 hover:bg-sky-600"
            onClick={() => {}}
          >
            <RefreshCcw className="w-4 h-4" />
            <span className="ml-3">Update</span>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
