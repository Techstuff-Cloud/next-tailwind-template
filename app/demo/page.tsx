import * as React from "react";
import { CardComponent } from "@/components/demo/Card";
import { TabComponent } from "@/components/demo/Tabs";
import { ButtonComponent } from "@/components/demo/Button";

const Page = () => {
  return (
    <div className="flex items-center flex-col my-12 gap-20">
      <CardComponent />
      <TabComponent />
      <ButtonComponent />
    </div>
  );
};

export default Page;
