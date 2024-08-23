"use client";
import FormikInput from "@/components/Formik/FormikInput";
import FormikMultiSelect from "@/components/Formik/FormikMultiSelect";
import FormikSelect from "@/components/Formik/FormikSelect";
import FormikTextArea from "@/components/Formik/FormikTextArea";
import FormilNestedInput from "@/components/Formik/FormilNestedInput";
import { DataTable } from "@/components/Table/components/data-table";
import { DataTableColumnHeader } from "@/components/Table/components/data-table-column-header";
import { DataTableRowActions } from "@/components/Table/components/data-table-row-actions";
import { initialValues, validationSchema } from "@/components/Table/data/data";
import { FormValues } from "@/components/Table/data/schema";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useDBOperations } from "@/lib/hooks/useDBOperations";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import {
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@radix-ui/react-select";
import { ColumnDef } from "@tanstack/react-table";
import { Formik, Form } from "formik";
import Image from "next/image";
import React, { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Filter } from "@/lib/types";

const options = [
  { value: "Option 1", label: "Option 1" },
  { value: "Option 2", label: "Option 2" },
  { value: "Option 3", label: "Option 3" },
  { value: "Option 4", label: "Option 4" },
];

const API_PATH = "users";
const FIELD_TO_SEARCH = "email";
const filters: Filter[] = [];

const UserPage = () => {
  const { document, deleteData, getById } = useDBOperations(API_PATH);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>(initialValues);

  const handleDrawerOpen = (id: string) => {
    setFormValues(document as FormValues);
    setOpenDrawer(true);
  };

  const columns: ColumnDef<unknown, any>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value: any) =>
            table.toggleAllPageRowsSelected(!!value)
          }
          aria-label="Select all"
          className="translate-y-[2px]"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value: any) => row.toggleSelected(!!value)}
          aria-label="Select row"
          className="translate-y-[2px]"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "_id",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="ID" />
      ),
      cell: ({ row }) => <div className="w-[80px]">{row.getValue("_id")}</div>,
      enableSorting: false,
      enableHiding: true,
    },
    {
      accessorKey: "firstName",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="First Name" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {row.getValue("firstName")}
            </span>
          </div>
        );
      },
      enableSorting: true,
    },
    {
      accessorKey: "lastName",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Last Name" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {row.getValue("lastName")}
            </span>
          </div>
        );
      },
      enableSorting: false,
    },
    {
      accessorKey: "email",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Email" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {row.getValue("email")}
            </span>
          </div>
        );
      },
      enableSorting: false,
    },
    {
      accessorKey: "mobile",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Mobile" />
      ),
      cell: ({ row }) => {
        return (
          <div className="flex space-x-2">
            <span className="max-w-[500px] truncate font-medium">
              {row.getValue("mobile")}
            </span>
          </div>
        );
      },
      enableSorting: false,
    },
    {
      id: "actions",
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

  return (
    <div>
      <div className="md:hidden">
        <Image
          src="/examples/tasks-light.png"
          width={1280}
          height={998}
          alt="Playground"
          className="block dark:hidden"
        />
        <Image
          src="/examples/tasks-dark.png"
          width={1280}
          height={998}
          alt="Playground"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <DataTable
          API_PATH={API_PATH}
          FIELD_TO_SEARCH={FIELD_TO_SEARCH}
          columns={columns}
          formValues={formValues}
          filters={filters}
          setFormValues={setFormValues}
          setOpenDrawer={setOpenDrawer}
        />
      </div>

      <Drawer direction="right" open={openDrawer} onOpenChange={setOpenDrawer}>
        <ScrollArea>
          <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-[500px] rounded-none">
            <DrawerHeader className="text-left">
              <DrawerTitle>Create</DrawerTitle>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <Formik
                initialValues={formValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                  console.log("values", values);
                }}
              >
                <Form className="flex flex-col gap-4">
                  <div className="relative inline-block text-left">
                    <FormikMultiSelect
                      name="multiSelect"
                      label="Multi"
                      options={options}
                    />
                  </div>
                  <FormikInput label="Name" name="userName" />
                  <FormikTextArea label="textArea" name="textArea" />
                  <FormilNestedInput
                    label="Social Media Facebook"
                    name="social.facebook"
                  />
                  <FormilNestedInput
                    label="Social Media Twitter"
                    name="social.twitter"
                  />
                  <FormikSelect label="Job Type" name="jobType">
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </FormikSelect>
                  <DrawerFooter className="pt-2">
                    <Button type="submit">Submit</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">Cancel</Button>
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
};

export default UserPage;
