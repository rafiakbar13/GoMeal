"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/src/common/components/ui/checkbox";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { Category, Food } from "@prisma/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/common/components/ui/dropdown-menu";
import Image from "next/image";
import { Button } from "@/src/common/components/ui/button";
import { MoreHorizontal, RefreshCcw, Trash2 } from "lucide-react";
import { deleteData } from "@/src/common/lib/getData";
import { revalidatePath } from "next/cache";
import { useEffect } from "react";

// const handleDelete = async (id: string) => {
//   const res = await deleteData(`categories/${id}`);
//   return res;
// };

export const columns: ColumnDef<Category>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "image",
    header: () => (
      <DataTableColumnHeader
        title="Image"
        className=" text-zinc-950 font-semibold"
      />
    ),
    cell: ({ row }) => (
      <Image
        src={row.original.image}
        className="flex items-center"
        alt={row.original.name}
        width={50}
        height={50}
      />
    ),
  },
  {
    accessorKey: "name",
    header: () => (
      <DataTableColumnHeader
        title="Name"
        className=" text-zinc-950 font-semibold text-right"
      />
    ),
    cell: ({ row }) => <span className="text-right">{row.original.name}</span>,
  },
  {
    accessorKey: "actions",
    header: () => (
      <DataTableColumnHeader
        title="Actions"
        className=" text-zinc-950 font-semibold text-right"
      />
    ),
    id: "actions",
    cell: ({ row }) => {
      return <DataTableRowActions row={row} />;
    },
  },
];
