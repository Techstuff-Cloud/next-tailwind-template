import React from "react";

const ManagementSettingLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <div>Management Setting Layout</div>
      {children}
    </>
  );
};

ManagementSettingLayout.displayName = "ManagementSettingLayout";

export default ManagementSettingLayout;
