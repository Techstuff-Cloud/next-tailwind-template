"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import { studentLayoutTabsData } from "../constants";
import { StudentLayoutTabItem } from "../types";
import { useRouter } from "next/navigation";

const StudentLayoutTabs = () => {
  const [activeTab, setActiveTab] = useState<string | undefined>(undefined);

  // const handleTabClick = (index: number, tab: Tab<T>) => {

  //   onTabChange?.(tab);
  // };
  const router = useRouter();

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    router.push(value);
  };

  return (
    <div className="p-6">
      {/* <Tabs<StudentLayoutTabItem>
        tabs={studentLayoutTabsData}
        onTabChange={handleTabChange}
      /> */}

      <Tabs
        className="w-[400px]"
        onValueChange={handleTabChange}
        value={activeTab}
      >
        <TabsList className="grid w-full grid-cols-2">
          {studentLayoutTabsData.map((tab) => (
            <TabsTrigger key={tab.label} value={tab.href}>
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
};

StudentLayoutTabs.displayName = "StudentLayoutTabs";
export default StudentLayoutTabs;
