"use client";

import { createContext, useContext, useReducer, type Dispatch } from "react";

export interface UserState {
  token: string;
  claims: any[];
  organizations: any[];
  activeSubscription: string;
  roles: string[];
}

type UserAction =
  | {
      type: "SET_TOKEN";
      token: string;
    }
  | {
      type: "SET_CLAIMS";
      claims: any[];
    }
  | {
      type: "SET_ORGANIZATIONS";
      organizations: any[];
    }
  | {
      type: "SET_ACTIVE_SUBSCRIPTION";
      activeSubscription: string;
    }
  | {
      type: "SET_ROLES";
      roles: string[];
    };

export const initialUserState: UserState = {
  token: "",
  claims: [],
  organizations: [],
  activeSubscription: "",
  roles: [],
};

const userReducer = (state: UserState, action: UserAction) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_CLAIMS":
      return {
        ...state,
        claims: action.claims,
      };
    case "SET_ORGANIZATIONS":
      return {
        ...state,
        organizations: action.organizations,
      };
    case "SET_ACTIVE_SUBSCRIPTION":
      return {
        ...state,
        activeSubscription: action.activeSubscription,
      };
    case "SET_ROLES":
      return {
        ...state,
        roles: action.roles,
      };
    default:
      return state;
  }
};

const UsersContext = createContext<
  { userState: UserState; userDispatch: Dispatch<UserAction> } | undefined
>(undefined);

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [userState, userDispatch] = useReducer(userReducer, initialUserState);

  return (
    <UsersContext.Provider value={{ userState, userDispatch }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UsersContext);

  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
};
