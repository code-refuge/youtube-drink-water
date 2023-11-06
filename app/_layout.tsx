import { Tabs } from "expo-router/tabs";
import { NativeBaseProvider, StatusBar } from "native-base";
import { FirebaseProvider } from "../src/contexts/FirebaseContext";
import { UserProvider } from "../src/contexts/UserContext";
import { Ionicons } from "@expo/vector-icons";

export default function AppLayout() {
  return (
    <NativeBaseProvider>
      <FirebaseProvider>
        <UserProvider>
          <Tabs initialRouteName="dashboard" screenOptions={{}}>
            <Tabs.Screen
              name="dashboard"
              options={{
                title: "Dashboard",
                tabBarIcon: (props) => (
                  <Ionicons name="ios-home" {...props} size={18} />
                ),
              }}
            />
            <Tabs.Screen
              name="index"
              options={{
                title: "Configurações",
                tabBarIcon: (props) => (
                  <Ionicons name="ios-settings" {...props} size={18} />
                ),
              }}
            />
            <Tabs.Screen
              name="profile"
              options={{
                title: "Perfil",
                tabBarIcon: (props) => (
                  <Ionicons name="ios-person" {...props} size={18} />
                ),
              }}
            />
          </Tabs>
        </UserProvider>
      </FirebaseProvider>
    </NativeBaseProvider>
  );
}
