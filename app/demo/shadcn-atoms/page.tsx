import * as React from "react";

import {
  CardComponent,
  AccordionComponent,
  ButtonComponent,
  ToastComponent,
  TableComponent,
} from "@/app/demo/shadcn-atoms/index";

const DemoPage = () => {
  return (
    <div className="mx-auto flex justify-center bg-gray-400 px-10">
      <div className="flex items-center flex-col my-12 gap-20 max-w-3xl">
        <CardComponent />
        <ButtonComponent />
        <AccordionComponent />
        <ToastComponent />
        <TableComponent />
      </div>
    </div>
  );
};

export default DemoPage;
