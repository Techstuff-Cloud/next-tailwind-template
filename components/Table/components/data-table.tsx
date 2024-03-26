'use client';

import { useState } from 'react';
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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
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
import { Filter, FilterProp, SortProp } from '@/constants/types/Table';
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

const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

interface DataTableProps<TData, TValue> {}

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

export function DataTable<TData, TValue>({}: DataTableProps<TData, TValue>) {
  const { fetchAll, data, loading, document, create, deleteData, getById } =
    useDBOperations('users');
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const columns: ColumnDef<any>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && 'indeterminate')
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label='Select all'
          className='translate-y-[2px]'
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
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
      enableSorting: false,
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

  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

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

  // useEffect(() => {
  //   console.log(
  //     'columnFilters',
  //     appendFilterParams(columnFilters as unknown as FilterProp[])
  //   );
  // }, [columnFilters]);

  // useEffect(() => {
  //   console.log('sorting', appendSortParams(sorting));
  // }, [sorting]);

  // useEffect(() => {
  //   console.log('rowSelection', rowSelection);
  // }, [rowSelection]);

  // useEffect(() => {
  //   console.log('APPLIED FILTER', filters);
  // }, []);

  useEffect(() => {
    console.log('data', data);
    console.log('loading', loading);
    console.log('document', document);
  }, [loading, data, document]);

  useEffect(() => {
    fetchAll();
  }, []);

  return (
    <div className='space-y-4'>
      <button className='btn' onClick={() => setOpenDrawer(true)}>
        Create
      </button>

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

      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <DrawerContent>
          <div className='mx-auto w-full max-w-sm'>
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>
            <div className='p-4 pb-0'>
              <Formik
                initialValues={{
                  multiSelect: ['Option 1', 'Option 2'],
                }}
                onSubmit={(values, { setSubmitting }) => {
                  console.log('values', values);
                }}
              >
                <Form>
                  <div className='relative inline-block text-left'>
                    <FormikMultiSelect
                      name='multiSelect'
                      label='Multi'
                      options={options}
                    />
                  </div>
                  <FormikInput label='name' name='name' />
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
                    <SelectTrigger className='w-[180px]'>
                      <SelectValue placeholder='Theme' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='light'>Light</SelectItem>
                      <SelectItem value='dark'>Dark</SelectItem>
                      <SelectItem value='system'>System</SelectItem>
                    </SelectContent>
                  </FormikSelect>

                  <Button type='submit'>Submit</Button>
                  <DrawerClose asChild>
                    <Button variant='outline'>Cancel</Button>
                  </DrawerClose>
                </Form>
              </Formik>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
