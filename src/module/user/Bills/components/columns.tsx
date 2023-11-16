"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/src/common/components/ui/checkbox"
import { DataTableColumnHeader } from "./data-table-column-header"
import type { Bills } from "@/src/common/types/Bills"
import { FaMapMarkerAlt } from "react-icons/fa";
import { DataTableRowActions } from "./data-table-row-actions"
export const columns: ColumnDef<Bills>[] = [
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
        accessorKey: "menu", header: () => (
            <DataTableColumnHeader
                title="Menu"
                className=" text-zinc-950 font-semibold"
            />
        )
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
            const status = row.getValue("status") as Bills["status"]
            return (
                <span className={`${status === 'completed' ? "bg-lime-50 border border-lime-300 text-lime-500 hover:bg-lime-50 hover:text-lime-500 px-4 py-2 text-right rounded-xl" : ""}`}>{status}</span>
            )
        }
    },
    {
        accessorKey: "date", header: () => (
            <DataTableColumnHeader
                title="Date"
                className=" text-zinc-950 font-semibold"
            />
        )
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
            const address = row.getValue("address") as Bills["address"]
            return (
                <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-1 text-primary" size={16} />
                    <span className="">{address}</span>
                </div>
            )
        }
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
            const amount = parseFloat(row.getValue("total"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            const number = formatted.split('$');
            return (
                <div className="font-medium">
                    <span className=""><span className="text-primary mr-[2px]">$</span>{number[1]}</span>
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
    },
    {
        id: "actions",
        cell: ({ row }) => (
            <DataTableRowActions row={row}>
                <div className="flex items-center space-x-2">
                    <button className="text-primary">View</button>
                    <button className="text-primary">Edit</button>
                    <button className="text-primary">Delete</button>
                </div>
            </DataTableRowActions>
        ),
    },
]