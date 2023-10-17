import React, { createContext, useEffect, useState } from "react";
import { IUser } from "../types/UserInterface";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IUserContext {
  user?: IUser;
  goal: number;
  getData: () => Promise<number>;
  storeData: (value: number) => Promise<void>;
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
  getData: () => Promise.resolve(GOAL),
  storeData: () => Promise.resolve(),
});

interface UserProviderProps {
  children: React.ReactNode;
}

const STORE_KEY = "@goal";

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user] = useState<IUser>(USER);
  const [goal, setGoal] = useState<number>(GOAL);

  useEffect(() => {
    getData().then((data) => setGoal(data));
  }, []);

  const storeData = async (value: number) => {
    try {
      setGoal(value);

      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(STORE_KEY, jsonValue);
    } catch (e) {
      // saving error
      console.error("saving error", e);
    }
  };

  async function getData(): Promise<number> {
    try {
      const jsonValue = await AsyncStorage.getItem(STORE_KEY);
      return jsonValue != null ? JSON.parse(jsonValue) : GOAL;
    } catch (e) {
      // error reading value
      console.error("error reading value", e);
      return GOAL;
    }
  }

  return (
    <UserContext.Provider value={{ goal, user, getData, storeData }}>
      {children}
    </UserContext.Provider>
  );
};

// interface UserProviderInterface {}

// export const UserContext = createContext<UserProviderInterface>({});

// interface UserProviderProps {
//   children: React.ReactNode;
// }

// export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
//   return (
//     <UserContext.Provider value={{}}>
//       {children}
//     </UserContext.Provider>
//   );
// };
