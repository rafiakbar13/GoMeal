"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/common/components/ui/checkbox";
import { DataTableColumnHeader } from "@/common/components/data-table/data-table-column-header";
import ActionColumn from "@/common/components/data-table/data-table-columns/ActionColumn";
import { FoodOrders, Order } from "@prisma/client";
import SortableColumn from "@/common/components/data-table/data-table-columns/SortableColumn";
import ImageColumn from "@/common/components/data-table/data-table-columns/ImageColumn";
import DateColumn from "@/common/components/data-table/data-table-columns/DateColumn";

type OrderWithFood = Order & {
  food: FoodOrders[];
};

export const columns: ColumnDef<Order>[] = [
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
          endpoint={`categories/${row.original.id}`}
          row={row}
          title="Categories"
        />
      );
    },
  },
];
