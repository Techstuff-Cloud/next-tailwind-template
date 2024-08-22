"use client";

import React from "react";
import { MANAGEMENT_STAFF_PERMISSIONS } from "@/lib/constants/permissions";
import { usePermissions } from "@/lib/hooks/usePermissions";
import Link from "@/components/Link";

const ManagementNavbar = () => {
  const [
    hasViewPrinciplePerms,
    hasViewStudentPerms,
    hasViewClassPerms,
    hasViewSettingPerms,
  ] = usePermissions([
    MANAGEMENT_STAFF_PERMISSIONS.PRINCIPLE.VIEW,
    MANAGEMENT_STAFF_PERMISSIONS.STUDENT.VIEW,
    MANAGEMENT_STAFF_PERMISSIONS.CLASS.VIEW,
    MANAGEMENT_STAFF_PERMISSIONS.SETTING.VIEW,
  ]);

  return (
    <nav>
      <Link href={"/management/principle"} disabled={!hasViewPrinciplePerms}>
        View Principles
      </Link>

      <Link href={"/management/student"} disabled={!hasViewStudentPerms}>
        View Students
      </Link>

      <Link href={"/management/class"} disabled={!hasViewClassPerms}>
        View Class
      </Link>

      <Link href={"/management/setting"} disabled={!hasViewSettingPerms}>
        View Setting
      </Link>
    </nav>
  );
};

ManagementNavbar.displayName = "ManagementNavbar";
export default ManagementNavbar;
