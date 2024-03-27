'use client';

import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Row } from '@tanstack/react-table';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { ConfirmationDialog } from '@/components/ConfirmationDialog/ConfirmationDialog';

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  getById: (id: string) => Promise<void>;
  deleteData: (id: string) => Promise<void>;
  handleDrawerOpen: (id: string) => void;
}

export function DataTableRowActions<TData>({
  row,
  getById,
  deleteData,
  handleDrawerOpen,
}: DataTableRowActionsProps<TData>) {
  const [open, setOpen] = useState(false);

  const handleDelete = () => {
    deleteData(row.renderValue('_id'));
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            className='flex h-8 w-8 p-0 data-[state=open]:bg-muted'
          >
            <DotsHorizontalIcon className='h-4 w-4' />
            <span className='sr-only'>Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-[160px]'>
          <DropdownMenuItem
            onClick={() => handleDrawerOpen(row.renderValue('_id'))}
          >
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ConfirmationDialog
        title='Are you sure want to delete?'
        description=''
        handleCancel={() => setOpen(false)}
        setOpenDialog={setOpen}
        handleContinue={handleDelete}
        openDialog={open}
      />
    </>
  );
}
