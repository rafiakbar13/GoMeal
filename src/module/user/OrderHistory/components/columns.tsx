"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/common/components/ui/checkbox";
import { FaMapMarkerAlt } from "react-icons/fa";
import type { OrderHistory } from "@/common/types/OrderHistory";
import { DataTableColumnHeader } from "../../Bills/components/data-table-column-header";

export const columns: ColumnDef<OrderHistory>[] = [
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
    cell: ({ row }) => (
      <div className="flex items-center">
        {row.original.image}
        <div className="ml-2 flex flex-col">
          <span className="font-semibold">{row.original.menu}</span>
          <span className="text-xs text-zinc-400">
            {row.original.quantity}x
          </span>
        </div>
      </div>
    ),
  },

  {
    accessorKey: "date",
    header: () => (
      <DataTableColumnHeader
        title="Date"
        className=" text-zinc-950 font-semibold"
      />
    ),
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
      const address = row.getValue("address") as OrderHistory["address"];
      return (
        <div className="flex items-center">
          <FaMapMarkerAlt className="mr-1 text-primary" size={16} />
          <span className="">{address}</span>
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
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      const number = formatted.split("$");
      return (
        <div className="font-medium">
          <span className="">
            <span className="text-primary mr-[2px]">$</span>
            {number[1]}
          </span>
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
      const status = row.getValue("status") as OrderHistory["status"];
      const statusClassMap: Record<OrderHistory["status"], string> = {
        completed:
          "bg-lime-50 border border-lime-300 text-lime-500 hover:bg-lime-50 hover:text-lime-500 px-4 py-2 text-right rounded-xl",
        pending:
          "bg-blue-50 border border-blue-300 text-blue-500 hover:bg-blue-50 hover:text-blue-500 px-4 py-2 text-right rounded-xl",
        delivering:
          "bg-yellow-50 border border-yellow-300 text-yellow-500 hover:bg-yellow-50 hover:text-yellow-500 px-4 py-2 text-right rounded-xl",
        cancelled:
          "bg-red-50 border border-red-300 text-red-500 hover:bg-red-50 hover:text-red-500 px-4 py-2 text-right rounded-xl",
      };
      const statusClassName = statusClassMap[status] || "";
      return <span className={statusClassName}>{status}</span>;
    },
  },
];
