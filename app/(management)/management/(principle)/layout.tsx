import React from "react";

const ManagementPrincipleLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <div>Management Principle Layout</div>
      {children}
    </>
  );
};

ManagementPrincipleLayout.displayName = "ManagementPrincipleLayout";

export default ManagementPrincipleLayout;
