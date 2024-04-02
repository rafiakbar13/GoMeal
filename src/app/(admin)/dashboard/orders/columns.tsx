"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/common/components/ui/checkbox";
import { DataTableColumnHeader } from "@/common/components/data-table/data-table-column-header";
import ActionColumn from "./ActionColumn";
import { FoodOrder, Order } from "@prisma/client";
import SortableColumn from "@/common/components/data-table/data-table-columns/SortableColumn";
import ImageColumn from "@/common/components/data-table/data-table-columns/ImageColumn";
import DateColumn from "@/common/components/data-table/data-table-columns/DateColumn";
import Image from "next/image";
import { statusClassMap } from "@/common/lib/statusClassMap";
import { convertCurrency } from "@/common/lib/convertCurrency";

const getStatusClass = (status: string) => {
  return statusClassMap[status as keyof typeof statusClassMap] || "";
};

type OrderWithFood = Order & { fooditems: FoodOrder[] };
export const columns: ColumnDef<OrderWithFood>[] = [
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
    accessorKey: "order",
    header: () => (
      <DataTableColumnHeader
        title="Order"
        className=" text-zinc-950 font-semibold"
      />
    ),
    cell: ({ row }) => (
      <span className="text-right">#{row.original.orderNumber}</span>
    ),
  },
  {
    accessorKey: "status",
    header: () => (
      <DataTableColumnHeader
        title="Status"
        className=" text-zinc-950 font-semibold text-right"
      />
    ),
    cell: ({ row }) => {
      const status = row?.original?.orderStatus?.toLowerCase();
      return (
        <span className={`${getStatusClass(status ?? "")}`}>{status}</span>
      );
    },
  },
  {
    accessorKey: "image",
    header: () => (
      <DataTableColumnHeader
        title="Image"
        className=" text-zinc-950 font-semibold"
      />
    ),
    cell: ({ row }) => {
      const food = row.original.fooditems;

      return (
        <div className="flex">
          {food.map((item) => (
            <div key={item.foodId}>
              <Image
                src={item.image ?? ""}
                alt={item.name ?? ""}
                width={50}
                height={50}
              />
            </div>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "amount",
    header: () => (
      <DataTableColumnHeader
        title="Amount"
        className=" text-zinc-950 font-semibold text-right"
      />
    ),
    cell: ({ row }) => (
      <span className="text-right">{`${convertCurrency(
        row.original.total ?? 0
      )}`}</span>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => <SortableColumn column={column} title="Name" />,
    cell: ({ row }) => {
      const firstName = row.original.firstName;
      const lastName = row.original.lastName;
      return (
        <span className="text-right">
          {firstName} {lastName}
        </span>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: () => (
      <DataTableColumnHeader
        title="Date Created"
        className=" text-zinc-950 font-semibold text-right"
      />
    ),
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
          endpoint={`orders/${row.original.id}`}
          row={row}
          title="Order"
        />
      );
    },
  },
];
