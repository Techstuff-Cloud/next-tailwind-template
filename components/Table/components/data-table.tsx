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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import { useEffect } from 'react';
import TableLoader from './tableLoader';
import { Formik, Form } from 'formik';
import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Filter } from '@/constants/types/Table';
import { useDBOperations } from '@/lib/hooks/useDBOperations';
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import FormikInput from '@/components/Formik/FormikInput';
import FormikSelect from '@/components/Formik/FormikSelect';
import FormilNestedInput from '@/components/Formik/FormilNestedInput';
import FormikMultiSelect from '@/components/Formik/FormikMultiSelect';
import FormikTextArea from '@/components/Formik/FormikTextArea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { initialValues, validationSchema } from '../data/data';

const options = [
  { value: 'Option 1', label: 'Option 1' },
  { value: 'Option 2', label: 'Option 2' },
  { value: 'Option 3', label: 'Option 3' },
  { value: 'Option 4', label: 'Option 4' },
];

interface DataTableProps<TData, TValue> {}

const filters: Filter[] = [];

export function DataTable<TData, TValue>({}: DataTableProps<TData, TValue>) {
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
    deleteData,
    getById,
    fetchDataPaginated,
  } = useDBOperations('users');
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [openDrawer, setOpenDrawer] = useState(false);

  const columns: ColumnDef<any>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value: any) =>
            table.toggleAllPageRowsSelected(!!value)
          }
          aria-label='Select all'
          className='translate-y-[2px]'
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value: any) => row.toggleSelected(!!value)}
          aria-label='Select row'
          className='translate-y-[2px]'
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: '_id',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='ID' />
      ),
      cell: ({ row }) => <div className='w-[80px]'>{row.getValue('_id')}</div>,
      enableSorting: false,
      enableHiding: true,
    },
    {
      accessorKey: 'firstName',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='First Name' />
      ),
      cell: ({ row }) => {
        return (
          <div className='flex space-x-2'>
            <span className='max-w-[500px] truncate font-medium'>
              {row.getValue('firstName')}
            </span>
          </div>
        );
      },
      enableSorting: true,
    },
    {
      accessorKey: 'lastName',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Last Name' />
      ),
      cell: ({ row }) => {
        return (
          <div className='flex space-x-2'>
            <span className='max-w-[500px] truncate font-medium'>
              {row.getValue('lastName')}
            </span>
          </div>
        );
      },
      enableSorting: false,
    },
    {
      accessorKey: 'email',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Email' />
      ),
      cell: ({ row }) => {
        return (
          <div className='flex space-x-2'>
            <span className='max-w-[500px] truncate font-medium'>
              {row.getValue('email')}
            </span>
          </div>
        );
      },
      enableSorting: false,
    },
    {
      accessorKey: 'mobile',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title='Mobile' />
      ),
      cell: ({ row }) => {
        return (
          <div className='flex space-x-2'>
            <span className='max-w-[500px] truncate font-medium'>
              {row.getValue('mobile')}
            </span>
          </div>
        );
      },
      enableSorting: false,
    },
    {
      id: 'actions',
      cell: ({ row }) => (
        <DataTableRowActions
          deleteData={deleteData}
          getById={getById}
          handleDrawerOpen={handleDrawerOpen}
          row={row}
        />
      ),
    },
  ];

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

  const handleDrawerOpen = (id: string) => {
    setOpenDrawer(true);
  };

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
        fieldSearch={'email'}
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
      <DataTablePagination
        table={table}
        totalPages={totalPages}
        pageNumber={pageNumber}
        rowsPerPageChange={rowsPerPageChange}
        nextPage={nextPage}
        prevPage={prevPage}
      />

      <Drawer direction='right' open={openDrawer} onOpenChange={setOpenDrawer}>
        <ScrollArea>
          <DrawerContent className='h-screen top-0 right-0 left-auto mt-0 w-[500px] rounded-none'>
            <DrawerHeader className='text-left'>
              <DrawerTitle>Create</DrawerTitle>
            </DrawerHeader>
            <div className='p-4 pb-0'>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  console.log('values', values);
                }}
              >
                <Form className='flex flex-col gap-4'>
                  <div className='relative inline-block text-left'>
                    <FormikMultiSelect
                      name='multiSelect'
                      label='Multi'
                      options={options}
                    />
                  </div>
                  <FormikInput label='Name' name='userName' />
                  <FormikTextArea label='textArea' name='textArea' />
                  <FormilNestedInput
                    label='Social Media Facebook'
                    name='social.facebook'
                  />
                  <FormilNestedInput
                    label='Social Media Twitter'
                    name='social.twitter'
                  />
                  <FormikSelect label='Job Type' name='jobType'>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder='Theme' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='light'>Light</SelectItem>
                      <SelectItem value='dark'>Dark</SelectItem>
                      <SelectItem value='system'>System</SelectItem>
                    </SelectContent>
                  </FormikSelect>
                  <DrawerFooter className='pt-2'>
                    <Button type='submit'>Submit</Button>
                    <DrawerClose asChild>
                      <Button variant='outline'>Cancel</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </Form>
              </Formik>
            </div>
          </DrawerContent>
        </ScrollArea>
      </Drawer>
    </div>
  );
}
