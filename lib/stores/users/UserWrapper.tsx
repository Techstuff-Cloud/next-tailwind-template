'use client';

import { useEffect } from 'react';
import { UserState, useUserContext } from './Context';

interface UserWrapperProps extends Partial<UserState> {}

export const UserWrapper = (props: UserWrapperProps) => {
  const { activeSubscription, origanizations, claims, token, roles } = props;
  const { userDispatch } = useUserContext();

  useEffect(() => {
    userDispatch({ type: 'SET_TOKEN', token: token || '' });
  }, [token, userDispatch]);

  useEffect(() => {
    userDispatch({ type: 'SET_ACTIVE_SUBSCRIPTION', activeSubscription: activeSubscription || '' });
  }, [activeSubscription, userDispatch]);

  useEffect(() => {
    userDispatch({ type: 'SET_ORIGANIZATIONS', origanizations: origanizations || [] });
  }, [origanizations, userDispatch]);

  useEffect(() => {
    userDispatch({ type: 'SET_CLAIMS', claims: claims || [] });
  }, [claims, userDispatch]);

  useEffect(() => {
    userDispatch({ type: 'SET_ROLES', roles: roles || [] });
  }, [roles, userDispatch]);

  return null;
};
