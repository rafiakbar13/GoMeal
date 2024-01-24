"use client";

import { CrossIcon } from "lucide-react";
import { Table } from "@tanstack/react-table";

import { Button } from "@/src/common/components/ui/button";
import { Input } from "@/src/common/components/ui/input";
import { DataTableViewOptions } from "./data-table-view-options";
import { FiSearch } from "react-icons/fi";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filterKeys?: string[];
}

export function DataTableToolbar<TData>({
  table,
  filterKeys,
}: DataTableToolbarProps<TData>) {
  const isFiltered = filterKeys?.some(
    (key: string) => table.getState().columnFilters[key]?.length > 0
  );
  const handleInputChange = (key: any, value: any) => {
    table.getColumn(key)?.setFilterValue(value);
  };

  const handleResetClick = () => {
    filterKeys?.forEach((key) => {
      table.getColumn(key)?.setFilterValue("");
    });
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        {filterKeys?.map((key) => (
          <div className="relative flex w-2/5 items-center ">
            <Input
              type="search"
              className="focus-visible:ring-1 focus-visible:ring-primary pl-10 text-xs border-0 "
              key={key}
              placeholder={`Filter ${key}...`}
              value={table.getColumn(key)?.getFilterValue()?.toString() ?? ""}
              onChange={(event: any) =>
                handleInputChange(key, event.target.value)
              }
            />
            <FiSearch
              className="text-primary absolute left-3 top-1/2 transform -translate-y-1/2"
              size={20}
            />
          </div>
        ))}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={handleResetClick}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <CrossIcon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
