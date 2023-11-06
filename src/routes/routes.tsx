import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import { Text } from "native-base";
import { View } from "react-native";
import { DashboardScreen } from "../screens/DashboardScreen";
import Icon from "react-native-vector-icons/AntDesign";
import { ProfileScreen } from "../screens/ProfileScreen";

type ITabRoutes = {
  Settings: undefined;
  Dashboard: undefined;
  Profile: undefined;
};

const Tab = createMaterialBottomTabNavigator<ITabRoutes>();

interface IMyTabs {}
export const Routes: React.FunctionComponent<IMyTabs> = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Settings"
          component={Screen}
          options={{
            title: "Configurações",
            tabBarIcon: () => <Icon name="setting" size={20} color="purple" />,
          }}
        />
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            title: "Dashboard",
            tabBarIcon: () => (
              <Icon name="dashboard" size={20} color="purple" />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Perfil",
            tabBarIcon: () => <Icon name="user" size={20} color="purple" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export function generateRandomColorHexadecimal() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

const Screen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: generateRandomColorHexadecimal(),
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{Math.random()}</Text>
    </View>
  );
};
