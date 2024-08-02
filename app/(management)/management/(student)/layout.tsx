import React from 'react';

const ManagementStudentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>Management Student Layout</div>
      {children}
    </>
  );
};

ManagementStudentLayout.displayName = 'ManagementStudentLayout';

export default ManagementStudentLayout;
