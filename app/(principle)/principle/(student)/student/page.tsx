'use client';

import { Button } from '@/components/ui/button';
import { PRINCIPLE_PERMISSIONS } from '@/lib/constants/permissions';
import { usePermissions } from '@/lib/hooks/usePermissions';
import React from 'react';

const PrincipleStudentPage = () => {
  const [hasAddStudentPerms, hasEditStudentPerms, hasDeleteStudentPerms] = usePermissions([
    PRINCIPLE_PERMISSIONS.STUDENT.ADD,
    PRINCIPLE_PERMISSIONS.STUDENT.EDIT,
    PRINCIPLE_PERMISSIONS.STUDENT.DELETE,
  ]);

  return (
    <div className='flex justify-end gap-3'>
      <Button
        variant='destructive'
        size='default'
        disabled={!hasAddStudentPerms}
        className={!hasAddStudentPerms ? 'cursor-not-allowed !pointer-events-auto' : ''}
      >
        Add Student
      </Button>

      <Button
        variant='destructive'
        size='default'
        disabled={!hasEditStudentPerms}
        className={!hasEditStudentPerms ? 'cursor-not-allowed !pointer-events-auto' : ''}
      >
        Edit Student
      </Button>

      <Button
        variant='destructive'
        size='default'
        disabled={!hasDeleteStudentPerms}
        className={!hasDeleteStudentPerms ? 'cursor-not-allowed !pointer-events-auto' : ''}
      >
        Delete Student
      </Button>
    </div>
  );
};

PrincipleStudentPage.displayName = 'PrincipleStudentPage';
export default PrincipleStudentPage;
