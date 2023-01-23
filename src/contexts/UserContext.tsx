import React, { createContext, useState } from 'react';
import { IUser } from '../types/UserInterface';

interface IUserContext {
  user?: IUser;
  goal: number;
  setGoal: React.Dispatch<React.SetStateAction<number>>;
}

const GOAL = 2000;
const USER = {
  name: 'João Mantovani',
  photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
}

export const UserContext = createContext<IUserContext>({
  goal: GOAL,
  setGoal: () => {},
  user: USER
});

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user] = useState<IUser>(USER);
  const [goal, setGoal] = useState<number>(GOAL);

  return (
    <UserContext.Provider value={{ goal, setGoal, user }}>
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

