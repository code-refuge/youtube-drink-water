import React, { createContext, useEffect, useState } from "react";
import { IUser } from "../types/UserInterface";
import { usePersistState } from "../hooks/usePersistState";

interface IUserContext {
  user?: IUser;
  goal: number;
  setGoal: (value: number) => Promise<void>;
  setUser: (value: IUser) => Promise<void>;
}

const GOAL = 2000;
const USER = {
  name: "João Mantovani",
  photo:
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
};

export const UserContext = createContext<IUserContext>({
  goal: GOAL,
  user: USER,
  setUser: () => Promise.resolve(),
  setGoal: () => Promise.resolve(),
});

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = usePersistState<IUser>(USER, "@user");
  const [goal, setGoal] = usePersistState<number>(GOAL, "goal1");

  return (
    <UserContext.Provider value={{ goal, user, setGoal, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
