//
/**
 * Generates paths with permissions based on the provided modules.
 *
 * @param {Record<string, Record<string, { VIEW?: string; EDIT?: string; ADD?: string; DELETE?: string }>>} modules - The modules containing permissions.
 * @return {Record<string, string[]>} The permissions mapped to their respective paths.
 */
const toPermissionPath = (
  modules: Record<
    string,
    Record<
      string,
      { VIEW?: string; EDIT?: string; ADD?: string; DELETE?: string }
    >
  >,
) => {
  const permissionsWithPath: Record<string, string[]> = {};

  Object.entries(modules).forEach(([moduleKey, moduleValue]) => {
    Object.entries(moduleValue).forEach(([permKey, permValue]) => {
      permissionsWithPath[
        `/${moduleKey}/${permKey.toLowerCase().replaceAll("_", "-")}`
      ] = Object.values(permValue);
    });
  });

  return permissionsWithPath;
};

export const PARENT_PERMISSIONS = {};
export const LIBRARIAN_PERMISSIONS = {};

export const TEACHER_PERMISSIONS = {
  SETTING: {
    EDIT: "teacher.setting.edit",
    VIEW: "teacher.setting.view",
    ADD: "teacher.setting.add",
    DELETE: "teacher.setting.delete",
  },
  CLASS: {
    VIEW: "teacher.class.view",
  },
  ATTENDANCE: {
    EDIT: "teacher.attendance.edit",
    VIEW: "teacher.attendance.view",
    ADD: "teacher.attendance.add",
    DELETE: "teacher.attendance.delete",
  },
  STUDENT: {
    EDIT: "teacher.student.edit",
    VIEW: "teacher.student.view",
    ADD: "teacher.student.add",
    DELETE: "teacher.student.delete",
  },
  CLASS_TEST: {
    VIEW: "teacher.class-test.view",
  },
  RESULT: {
    VIEW: "teacher.result.view",
    EDIT: "teacher.result.edit",
    ADD: "teacher.result.add",
    DELETE: "teacher.result.delete",
  },
};
export const STUDENT_PERMISSIONS = {
  ATTENDANCE: {
    VIEW: "student.attendance.view",
  },
  CLASS: {
    VIEW: "student.class.view",
  },
  LIBRARY: {
    VIEW: "student.library.view",
  },
  SETTING: {
    EDIT: "student.setting.edit",
    VIEW: "student.setting.view",
  },
  EXAM: {
    VIEW: "student.exam.view",
  },
  RESULT: {
    VIEW: "student.result.view",
  },
};

export const PRINCIPLE_PERMISSIONS = {
  SETTING: {
    EDIT: "principle.setting.edit",
    VIEW: "principle.setting.view",
    ADD: "principle.setting.add",
    DELETE: "principle.setting.delete",
  },
  LIBRARY: {
    VIEW: "principle.library.view",
  },
  CLASS: {
    VIEW: "principle.class.view",
  },
  STUDENT: {
    VIEW: "principle.student.view",
    ADD: "principle.student.add",
    EDIT: "principle.student.edit",
    DELETE: "principle.student.delete",
  },
  TEACHER: {
    VIEW: "principle.teacher.view",
    ADD: "principle.teacher.add",
    EDIT: "principle.teacher.edit",
    DELETE: "principle.teacher.delete",
  },
};
export const MANAGEMENT_STAFF_PERMISSIONS = {
  PRINCIPLE: {
    VIEW: "management.principle.view",
    ADD: "management.principle.add",
    EDIT: "management.principle.edit",
    DELETE: "management.principle.delete",
  },
  TEACHER: {
    VIEW: "management.teacher.view",
    ADD: "management.teacher.add",
    EDIT: "management.teacher.edit",
    DELETE: "management.teacher.delete",
  },
  STUDENT: {
    VIEW: "management.student.view",
    ADD: "management.student.add",
    EDIT: "management.student.edit",
    DELETE: "management.student.delete",
  },
  CLASS: {
    VIEW: "management.class.view",
    ADD: "management.class.add",
    EDIT: "management.class.edit",
    DELETE: "management.class.delete",
  },
  LIBRARY: {
    VIEW: "management.library.view",
    ADD: "management.library.add",
    EDIT: "management.library.edit",
    DELETE: "management.library.delete",
  },
  SETTING: {
    VIEW: "management.setting.view",
    ADD: "management.setting.add",
    EDIT: "management.setting.edit",
    DELETE: "management.setting.delete",
  },
  SCHOOL: {
    VIEW: "management.school.view",
    ADD: "management.school.add",
    EDIT: "management.school.edit",
    DELETE: "management.school.delete",
  },
  CLASS_TEST: {
    VIEW: "management.class-test.view",
    ADD: "management.class-test.add",
    EDIT: "management.class-test.edit",
    DELETE: "management.class-test.delete",
  },
};

export const PERMISSIONS: Record<string, string[]> = toPermissionPath({
  principle: PRINCIPLE_PERMISSIONS,
  teacher: TEACHER_PERMISSIONS,
  student: STUDENT_PERMISSIONS,
  management: MANAGEMENT_STAFF_PERMISSIONS,
});
