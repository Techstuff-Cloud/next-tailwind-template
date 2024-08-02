'use client';

import { useEffect, useState } from 'react';
import { useUserContext } from '../stores/users';

/**
 * Returns an array of booleans indicating whether each permission in the input array is present in the user's claims.
 *
 * @example
 * INPUT: ["management.principle.view", "management.teacher.add"]
 * OUTPUT: [true, false] // `true` indicates that the user has permission for viewing principle,
 *                       //  `false` indicates that the user does not have permission for adding teacher
 *
 * @param {string[]} permissions - An array of permission strings.
 * @return {boolean[]} An array of booleans indicating whether each permission in the input array is present in the user's claims.
 */
export const usePermissions = (permissions: string[]): boolean[] => {
  const [perms, setPerms] = useState<boolean[]>([]);
  const { userState } = useUserContext();

  useEffect(() => {
    const permsData = permissions.map((perm) => userState.claims?.includes(perm));
    setPerms(permsData);
  }, [userState.claims]);

  return perms || [];
};
