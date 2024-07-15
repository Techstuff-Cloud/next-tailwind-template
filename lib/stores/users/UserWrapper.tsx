'use client';

import { useEffect } from 'react';
import { UserState, useUserContext } from './Context';

interface UserWrapperProps extends Partial<UserState> {}

export const UserWrapper = (props: UserWrapperProps) => {
  const { activeSubscription, origanizations, permissions, token } = props;
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
    userDispatch({ type: 'SET_PERMISSIONS', permissions: permissions || [] });
  }, [permissions, userDispatch]);

  return null;
};
