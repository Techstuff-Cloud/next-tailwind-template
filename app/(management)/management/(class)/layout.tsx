import React from "react";

const ManagementClassLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>Management Class Layout</div>
      {children}
    </>
  );
};

ManagementClassLayout.displayName = "ManagementClassLayout";

export default ManagementClassLayout;
