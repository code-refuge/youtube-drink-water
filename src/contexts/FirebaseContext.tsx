// Definir as interfaces do contexto
// Context
// Provider

import React, { createContext, useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import { Center, Spinner, Text } from "native-base";

export interface IFirebaseContext {
  loading: boolean;
}

interface IFirebaseProvider {
  children: React.ReactNode;
}

export const FirebaseContext = createContext({
  loading: false,
} as IFirebaseContext);

export const FirebaseProvider: React.FC<IFirebaseProvider> = ({ children }) => {
  const [loading, setLoading] = useState(false);

  // if (loading)
  //   return (
  //     <Center flex={1}>
  //       <Spinner size={"lg"} />
  //       <Text mt={1}>Carregando...</Text>
  //     </Center>
  //   );

  return (
    <FirebaseContext.Provider value={{ loading }}>
      {children}
    </FirebaseContext.Provider>
  );
};
