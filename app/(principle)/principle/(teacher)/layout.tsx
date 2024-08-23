import React from "react";

const PrincipleTeacherLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <div>Principle Teacher Layout</div>
      {children}
    </>
  );
};

PrincipleTeacherLayout.displayName = "PrincipleTeacherLayout";

export default PrincipleTeacherLayout;
