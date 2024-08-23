import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const TableLoader = () => {
  const skeletons = Array.from({ length: 10 }, (_, index) => (
    <Skeleton key={index} className="h-10 w-full" />
  ));

  return <div className="space-y-2">{skeletons}</div>;
};

export default TableLoader;
