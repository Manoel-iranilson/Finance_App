import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";

import HomeScreen from "../screens/Home/Index";
import NewRoutes from "../routes/new.routes";

import AntDesing from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

const routes: React.FC = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <AntDesing name="home" color={color} size={size} />;
          },
          tabBarActiveTintColor: "#32CD32",
        }}
      />
      <Tab.Screen
        name="New"
        component={NewRoutes}
        options={{
          tabBarActiveTintColor: "#ffff",
          tabBarIcon: ({ color, size }) => {
            return (
              <View style={styles.iconTabRound}>
                <Ionicons name="add" color={color} size={size} />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  iconTabRound: {
    backgroundColor: "#32CD32",
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});

export default routes;
