import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { UserProvider } from "./src/contexts/UserContext";
import { Routes } from "./src/routes/routes";
import { useEffect, useState } from "react";
import { LogBox } from "react-native";
import auth from "@react-native-firebase/auth";
import { FirebaseProvider } from "./src/contexts/FirebaseContext";

export default function App() {
  return (
    <NativeBaseProvider>
      <FirebaseProvider>
        <UserProvider>
          <StatusBar style="auto" />
          <Routes />
        </UserProvider>
      </FirebaseProvider>
    </NativeBaseProvider>
  );
}
