"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/src/common/components/ui/checkbox";
import { DataTableColumnHeader } from "@/src/common/components/data-table/data-table-column-header";
import { Food } from "@prisma/client";
import Image from "next/image";
import { deleteData } from "@/src/common/lib/getData";
import ActionColumn from "@/src/common/components/data-table/data-table-columns/ActionColumn";
import ImageColumn from "@/src/common/components/data-table/data-table-columns/ImageColumn";
import SortableColumn from "@/src/common/components/data-table/data-table-columns/SortableColumn";
import DateColumn from "@/src/common/components/data-table/data-table-columns/DateColumn";

export const columns: ColumnDef<Food>[] = [
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
    cell: ({ row }) => <ImageColumn row={row} accessorKey="image" />,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <SortableColumn column={column} title="Name" />,
    cell: ({ row }) => <span className="text-right">{row.original.name}</span>,
  },
  {
    accessorKey: "price",
    header: () => (
      <DataTableColumnHeader
        title="Price"
        className=" text-zinc-950 font-semibold text-right"
      />
    ),
    cell: ({ row }) => <span className="text-right">{row.original.price}</span>,
  },
  {
    accessorKey: "category",
    header: () => (
      <DataTableColumnHeader
        title="Category"
        className=" text-zinc-950 font-semibold text-right"
      />
    ),
    cell: ({ row }) => (
      <span className="text-right">{row.original.category?.name}</span>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => {
      return <DateColumn row={row} accessorKey="createdAt" />;
    },
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
      return (
        <ActionColumn
          row={row}
          title="Menu"
          endpoint={`menu/${row.original.id}`}
        />
      );
    },
  },
];
