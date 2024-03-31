"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/common/components/ui/checkbox";
import { DataTableColumnHeader } from "@/common/components/data-table/data-table-column-header";
import { FoodOrder } from "@prisma/client";
import DateColumn from "@/common/components/data-table/data-table-columns/DateColumn";
import { convertCurrency } from "@/common/lib/convertCurrency";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/common/components/ui/tooltip";
import { statusClassMap } from "@/common/lib/statusClassMap";
import ImageColumn from "@/common/components/data-table/data-table-columns/ImageColumn";
type Order = {
  id: number;
  menu: string;
  quantity: number;
  total: number;
  orderStatus: string;
  orderNumber: string;
  createdAt: Date;
  streetAddress: string;
  image: string;
  paymentMethod: string;
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
    accessorKey: "bills",
    header: () => (
      <DataTableColumnHeader
        title="Bills"
        className=" text-zinc-950 font-semibold"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span className="ml-2">{row.original.orderNumber}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "menu",
    header: () => (
      <DataTableColumnHeader
        title="Menu"
        className=" text-zinc-950 font-semibold"
      />
    ),
    cell: ({ row }) => (
      <div>
        {row.original.fooditems.map((food, index) => (
          <>
            <TooltipProvider key={food.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Image
                    src={food.image ?? ""}
                    alt={food.name ?? ""}
                    width={40}
                    height={40}
                    className="rounded-md"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <span className="text-zinc-950">{food.name}</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </>
        ))}
      </div>
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
      const status = row.original.orderStatus.toLowerCase();
      return <span className={`${getStatusClass(status)}`}>{status}</span>;
    },
  },
  {
    accessorKey: "createdAt",
    header: () => (
      <DataTableColumnHeader
        title="Date"
        className=" text-zinc-950 font-semibold"
      />
    ),
    cell: ({ row }) => {
      return <DateColumn row={row} accessorKey="createdAt" />;
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
    accessorKey: "payment",
    header: () => (
      <DataTableColumnHeader
        title="Payment Method"
        className=" text-zinc-950 font-semibold"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span className="">{row.original.paymentMethod}</span>
        </div>
      );
    },
  },
];
