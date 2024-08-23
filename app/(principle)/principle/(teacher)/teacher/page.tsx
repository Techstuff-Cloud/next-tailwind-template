"use client";

import { Button } from "@/components/ui/button";
import { PRINCIPLE_PERMISSIONS } from "@/lib/constants/permissions";
import { usePermissions } from "@/lib/hooks/usePermissions";
import React from "react";

const PrincipleTeacherPage = () => {
  const [hasAddTeacherPerms, hasEditTeacherPerms, hasDeleteTeacherPerms] =
    usePermissions([
      PRINCIPLE_PERMISSIONS.TEACHER.ADD,
      PRINCIPLE_PERMISSIONS.TEACHER.EDIT,
      PRINCIPLE_PERMISSIONS.TEACHER.DELETE,
    ]);

  return (
    <div className="flex justify-end gap-3">
      <Button
        variant="destructive"
        size="default"
        disabled={!hasAddTeacherPerms}
        className={
          !hasAddTeacherPerms ? "cursor-not-allowed !pointer-events-auto" : ""
        }
      >
        Add Teacher
      </Button>

      <Button
        variant="destructive"
        size="default"
        disabled={!hasEditTeacherPerms}
        className={
          !hasEditTeacherPerms ? "cursor-not-allowed !pointer-events-auto" : ""
        }
      >
        Edit Teacher
      </Button>

      <Button
        variant="destructive"
        size="default"
        disabled={!hasDeleteTeacherPerms}
        className={
          !hasDeleteTeacherPerms
            ? "cursor-not-allowed !pointer-events-auto"
            : ""
        }
      >
        Delete Teacher
      </Button>
    </div>
  );
};

PrincipleTeacherPage.displayName = "PrincipleTeacherPage";
export default PrincipleTeacherPage;
