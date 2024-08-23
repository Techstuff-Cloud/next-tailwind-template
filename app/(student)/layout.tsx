import { StudentLayout, StudentLayoutTabs } from "@/modules/student";
import React from "react";

const StudentAppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <StudentLayout>
        <div>StudentLayout</div>
        <StudentLayoutTabs />
        {children}
      </StudentLayout>
    </>
  );
};

StudentAppLayout.displayName = "StudentAppLayout";
export default StudentAppLayout;
