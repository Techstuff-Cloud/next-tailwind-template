'use client';

import { useState } from 'react';
import {
  ColumnDef,
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { useEffect } from 'react';
import TableLoader from './tableLoader';
import { Filter } from '@/lib/types';
import { useDBOperations } from '@/lib/hooks/useDBOperations';
import { FormValues } from '../data/schema';

interface DataTableProps<TData, TValue> {
  formValues: FormValues;
  API_PATH: string;
  FIELD_TO_SEARCH: string;
  filters: Filter[];
  columns: ColumnDef<unknown, any>[];
  setFormValues: React.Dispatch<React.SetStateAction<FormValues>>;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

export function DataTable<TData, TValue>({
  columns,
  API_PATH,
  formValues,
  filters,
  FIELD_TO_SEARCH,
  setFormValues,
  setOpenDrawer,
}: DataTableProps<TData, TValue>) {
  const {
    totalPages,
    pageNumber,
    data,
    loading,
    columnFilters,
    sorting,
    setSorting,
    rowsPerPageChange,
    setColumnFilters,
    nextPage,
    prevPage,
    fetchDataPaginated,
  } = useDBOperations(API_PATH);
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

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

  useEffect(() => {
    console.log('APPLIED FILTER', filters);
  }, []);

  useEffect(() => {
    fetchDataPaginated(1, 10);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='space-y-4'>
      <DataTableToolbar
        filters={filters}
        table={table}
        fieldSearch={FIELD_TO_SEARCH}
        setOpenDrawer={setOpenDrawer}
      />

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
                      <TableHead
                        key={header.id}
                        colSpan={header.colSpan}
                      >
                        {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
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
                      <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
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
      <DataTablePagination
        table={table}
        totalPages={totalPages}
        pageNumber={pageNumber}
        rowsPerPageChange={rowsPerPageChange}
        nextPage={nextPage}
        prevPage={prevPage}
      />
    </div>
  );
}
