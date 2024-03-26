'use client';

import * as React from 'react';
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { DataTablePagination } from '../components/data-table-pagination';
import { DataTableToolbar } from '../components/data-table-toolbar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useEffect, useState } from 'react';
import TableLoader from './tableLoader';
import { Filter, FilterProp, SortProp } from '@/constants/types/Table';
import { useDBOperations } from '@/lib/hooks/useDBOperations';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

const filters: Filter[] = [
  {
    name: 'status',
    options: [
      {
        value: 'backlog',
        label: 'Backlog',
      },
      {
        value: 'todo',
        label: 'Todo',
      },
      {
        value: 'in progress',
        label: 'In Progress',
      },
      {
        value: 'done',
        label: 'Done',
      },
      {
        value: 'canceled',
        label: 'Canceled',
      },
    ],
  },
  {
    name: 'priority',
    options: [
      {
        label: 'Low',
        value: 'low',
      },
      {
        label: 'Medium',
        value: 'medium',
      },
      {
        label: 'High',
        value: 'high',
      },
    ],
  },
];

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [loading, setLoading] = useState(true);
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  const appendFilterParams = (paramsArray: FilterProp[]) => {
    const queryString = paramsArray
      .map((param) => {
        const paramName = encodeURIComponent(param.id);
        const values = Array.isArray(param.value)
          ? param.value.map((val) => encodeURIComponent(val)).join(',')
          : encodeURIComponent(param.value);
        return `${paramName}=${values}`;
      })
      .join('&');

    return `?${queryString}`;
  };

  const appendSortParams = (paramsArray: SortProp[]) => {
    const queryString = paramsArray
      .map((param) => {
        const paramName = encodeURIComponent(param.id);
        const values = encodeURIComponent(param.desc ? 'DESC' : 'ASC');
        return `${paramName}=${values}`;
      })
      .join('&');

    return `?${queryString}`;
  };

  const appendPaginationParams = (paramsArray: SortProp[]) => {
    const queryString = paramsArray
      .map((param) => {
        const paramName = encodeURIComponent(param.id);
        const values = encodeURIComponent(param.desc ? 'DESC' : 'ASC');
        return `${paramName}=${values}`;
      })
      .join('&');

    return `?${queryString}`;
  };

  useEffect(() => {
    console.log(
      'columnFilters',
      appendFilterParams(columnFilters as unknown as FilterProp[])
    );
  }, [columnFilters]);

  useEffect(() => {
    console.log('sorting', appendSortParams(sorting));
  }, [sorting]);

  useEffect(() => {
    console.log('rowSelection', rowSelection);
  }, [rowSelection]);

  useEffect(() => {
    console.log('APPLIED FILTER', filters);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className='space-y-4'>
      <DataTableToolbar filters={filters} table={table} />

      {loading ? (
        <TableLoader />
      ) : (
        <div className='rounded-md border'>
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id} colSpan={header.colSpan}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className='h-24 text-center'
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}
      <DataTablePagination table={table} />
    </div>
  );
}
