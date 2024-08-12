'use client';

import React from 'react';
import { PRINCIPLE_PERMISSIONS } from '@/lib/constants/permissions';
import { usePermissions } from '@/lib/hooks/usePermissions';
import Link from '@/components/Link';

const PrincipleNavbar = () => {
  const [hasViewLibraryPerms, hasViewStudentPerms, hasViewClassPerms, hasViewSettingPerms, hasViewTeacherPerms] =
    usePermissions([
      PRINCIPLE_PERMISSIONS.LIBRARY.VIEW,
      PRINCIPLE_PERMISSIONS.STUDENT.VIEW,
      PRINCIPLE_PERMISSIONS.CLASS.VIEW,
      PRINCIPLE_PERMISSIONS.SETTING.VIEW,
      PRINCIPLE_PERMISSIONS.TEACHER.VIEW,
    ]);

  return (
    <nav>
      <Link
        href={'/principle/library'}
        disabled={!hasViewLibraryPerms}
      >
        View Library
      </Link>

      <Link
        href={'/principle/student'}
        disabled={!hasViewStudentPerms}
      >
        View Students
      </Link>

      <Link
        href={'/principle/class'}
        disabled={!hasViewClassPerms}
      >
        View Class
      </Link>

      <Link
        href={'/principle/setting'}
        disabled={!hasViewSettingPerms}
      >
        View Setting
      </Link>

      <Link
        href={'/principle/teacher'}
        disabled={!hasViewTeacherPerms}
      >
        View Teacher
      </Link>
    </nav>
  );
};

PrincipleNavbar.displayName = 'PrincipleNavbar';
export default PrincipleNavbar;
