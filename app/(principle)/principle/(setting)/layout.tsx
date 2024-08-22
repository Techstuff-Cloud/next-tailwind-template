import React from "react";

const PrincipleSettingLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <div>Principle Setting Layout</div>
      {children}
    </>
  );
};

PrincipleSettingLayout.displayName = "PrincipleSettingLayout";
export default PrincipleSettingLayout;
