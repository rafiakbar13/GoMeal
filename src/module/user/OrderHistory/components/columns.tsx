"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/common/components/ui/checkbox";
import { FaMapMarkerAlt } from "react-icons/fa";
import type { OrderHistory } from "@/common/types/OrderHistory";
import { DataTableColumnHeader } from "@/common/components/data-table/data-table-column-header";
import DateColumn from "@/common/components/data-table/data-table-columns/DateColumn";
import { FoodOrder } from "@prisma/client";
import ImageColumn from "@/common/components/data-table/data-table-columns/ImageColumn";
import Image from "next/image";
import { convertCurrency } from "@/common/lib/convertCurrency";
import { statusClassMap } from "@/common/lib/statusClassMap";

type Order = {
  id: number;
  menu: string;
  quantity: number;
  total: number;
  orderStatus: string;
  createdAt: Date;
  streetAddress: string;
  image: string;
  fooditems: FoodOrder[];
};

const getStatusClass = (status: string) => {
  return statusClassMap[status as keyof typeof statusClassMap] || "";
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
    accessorKey: "menu",
    header: () => (
      <DataTableColumnHeader
        title="Menu"
        className=" text-zinc-950 font-semibold"
      />
    ),
    cell: ({ row }) => {
      return (
        <div>
          {row.original.fooditems.map((food, index) => (
            <div key={food.foodId} className="flex items-center">
              <Image
                src={food.image ?? ""}
                alt={food.name ?? ""}
                width={40}
                height={40}
                className="rounded-md"
              />
              <span className="text-zinc-950">{food.name}</span>
            </div>
          ))}
        </div>
      );
    },
  },

  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ row }) => {
      console.log(row.original.createdAt);

      return <DateColumn row={row} accessorKey="createdAt" />;
    },
  },
  {
    accessorKey: "address",
    header: () => (
      <DataTableColumnHeader
        title="Address"
        className=" text-zinc-950 font-semibold"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <FaMapMarkerAlt className="mr-1 text-primary" size={16} />
          <span className="">{row.original.streetAddress}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "total",
    header: () => (
      <DataTableColumnHeader
        title="Total"
        className=" text-zinc-950 font-semibold"
      />
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("total"));
      return (
        <div className="font-medium">
          <span className="">{convertCurrency(amount)}</span>
        </div>
      );
    },
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
      const status = row.original.orderStatus.toLowerCase();
      return <span className={`${getStatusClass(status)}`}>{status}</span>;
    },
  },
];
