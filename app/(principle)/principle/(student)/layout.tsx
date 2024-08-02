import React from 'react';

const PrincipleStudentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>Principle Student Layout</div>
      {children}
    </>
  );
};

PrincipleStudentLayout.displayName = 'PrincipleStudentLayout';
export default PrincipleStudentLayout;
