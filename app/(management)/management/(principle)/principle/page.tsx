'use client';

import { Button } from '@/components/ui/button';
import { MANAGEMENT_STAFF_PERMISSIONS } from '@/lib/constants/permissions';
import { usePermissions } from '@/lib/hooks/usePermissions';
import React from 'react';

const ManagementPrinciplePage = () => {
  const [hasAddPrinciplePerms, hasEditPrinciplePerms, hasDeletePrinciplePerms] = usePermissions([
    MANAGEMENT_STAFF_PERMISSIONS.PRINCIPLE.ADD,
    MANAGEMENT_STAFF_PERMISSIONS.PRINCIPLE.EDIT,
    MANAGEMENT_STAFF_PERMISSIONS.PRINCIPLE.DELETE,
  ]);

  return (
    <div className='flex justify-end gap-3'>
      <Button
        variant='destructive'
        size='default'
        disabled={!hasAddPrinciplePerms}
        className={!hasAddPrinciplePerms ? 'cursor-not-allowed !pointer-events-auto' : ''}
      >
        Add Principle
      </Button>

      <Button
        variant='destructive'
        size='default'
        disabled={!hasEditPrinciplePerms}
        className={!hasEditPrinciplePerms ? 'cursor-not-allowed !pointer-events-auto' : ''}
      >
        Edit Principle
      </Button>

      <Button
        variant='destructive'
        size='default'
        disabled={!hasDeletePrinciplePerms}
        className={!hasDeletePrinciplePerms ? 'cursor-not-allowed !pointer-events-auto' : ''}
      >
        Delete Principle
      </Button>
    </div>
  );
};

ManagementPrinciplePage.displayName = 'ManagementPrinciplePage';

export default ManagementPrinciplePage;
