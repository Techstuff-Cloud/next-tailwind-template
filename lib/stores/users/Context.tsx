'use client';

import { createContext, useContext, useReducer, type Dispatch } from 'react';

export interface UserState {
  token: string;
  permissions: any[];
  origanizations: any[];
  activeSubscription: string;
}

type UserAction =
  | {
      type: 'SET_TOKEN';
      token: string;
    }
  | {
      type: 'SET_PERMISSIONS';
      permissions: any[];
    }
  | {
      type: 'SET_ORIGANIZATIONS';
      origanizations: any[];
    }
  | {
      type: 'SET_ACTIVE_SUBSCRIPTION';
      activeSubscription: string;
    };

const initialState: UserState = {
  token: '',
  permissions: [],
  origanizations: [],
  activeSubscription: '',
};

const userReducer = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PERMISSIONS':
      return {
        ...state,
        permissions: action.permissions,
      };
    case 'SET_ORIGANIZATIONS':
      return {
        ...state,
        origanizations: action.origanizations,
      };
    case 'SET_ACTIVE_SUBSCRIPTION':
      return {
        ...state,
        activeSubscription: action.activeSubscription,
      };
    default:
      return state;
  }
};

const UsersContext = createContext<{ userState: UserState; userDispatch: Dispatch<UserAction> } | undefined>(undefined);

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userState, userDispatch] = useReducer(userReducer, initialState);

  return <UsersContext.Provider value={{ userState, userDispatch }}>{children}</UsersContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};
