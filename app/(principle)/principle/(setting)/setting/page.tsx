'use client';

import { Button } from '@/components/ui/button';
import { PRINCIPLE_PERMISSIONS } from '@/lib/constants/permissions';
import { usePermissions } from '@/lib/hooks/usePermissions';
import React from 'react';

const PrincipleSettingPage = () => {
  const [hasAddSettingPerms, hasEditSettingPerms, hasDeleteSettingPerms] = usePermissions([
    PRINCIPLE_PERMISSIONS.SETTING.ADD,
    PRINCIPLE_PERMISSIONS.SETTING.EDIT,
    PRINCIPLE_PERMISSIONS.SETTING.DELETE,
  ]);

  return (
    <div className='flex justify-end gap-3'>
      <Button
        variant='destructive'
        size='default'
        disabled={!hasAddSettingPerms}
        className={!hasAddSettingPerms ? 'cursor-not-allowed !pointer-events-auto' : ''}
      >
        Add Setting
      </Button>

      <Button
        variant='destructive'
        size='default'
        disabled={!hasEditSettingPerms}
        className={!hasEditSettingPerms ? 'cursor-not-allowed !pointer-events-auto' : ''}
      >
        Edit Setting
      </Button>

      <Button
        variant='destructive'
        size='default'
        disabled={!hasDeleteSettingPerms}
        className={!hasDeleteSettingPerms ? 'cursor-not-allowed !pointer-events-auto' : ''}
      >
        Delete Setting
      </Button>
    </div>
  );
};

PrincipleSettingPage.displayName = 'PrincipleSettingPage';
export default PrincipleSettingPage;
