import { Input } from "@/common/components/ui/input";
import { Table } from "@tanstack/react-table";
import { FiSearch } from "react-icons/fi";
interface DataTableFilterProps<TData> {
  table: Table<TData>;
}

export const DataTableFilter = <TData,>({
  table,
}: DataTableFilterProps<TData>) => {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className="relative flex w-1/2">
      <Input
        placeholder="Search Bills"
        value={(table.getColumn("menu")?.getFilterValue() as string) ?? ""}
        onChange={(event) =>
          table.getColumn("menu")?.setFilterValue(event.target.value)
        }
        className="focus-visible:ring-1 focus-visible:ring-primary pl-10 text-xs max-w-sm border-0"
      />
      <FiSearch
        className="text-primary absolute left-3 top-1/2 transform -translate-y-1/2"
        size={20}
      />
    </div>
  );
};
