"use client";

import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { debounce } from "lodash";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DataTableViewOptions } from "./data-table-view-options";
import { Filter } from "@/lib/types";
import { Dispatch, SetStateAction } from "react";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  filters: Filter[];
  fieldSearch: string;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
}

export function DataTableToolbar<TData>({
  table,
  filters,
  fieldSearch,
  setOpenDrawer,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  const handleFilterChange = debounce((value) => {
    table.getColumn(fieldSearch)?.setFilterValue(value);
  }, 500);

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          onChange={(event) => handleFilterChange(event.target.value)}
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {filters.map((filter) => {
          if (table.getColumn(filter.name)) {
            return (
              <DataTableFacetedFilter
                key={filter.name}
                column={table.getColumn(filter.name)}
                title={filter.name.toUpperCase()}
                options={filter.options}
              />
            );
          }
        })}

        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
      <Button
        variant="outline"
        size="sm"
        className="ml-4 hidden h-8 lg:flex"
        onClick={() => setOpenDrawer(true)}
      >
        Create
      </Button>
    </div>
  );
}
