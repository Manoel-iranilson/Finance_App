import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import revenue from "../screens/New/revenue/Index";
import expenditure from "../screens/New/expenditure/Indes";

const routes: React.FC = () => {
  const Tab = createMaterialTopTabNavigator();

  const isTabBarVisible = (route) => {
    const routeName = route.state
      ? route.state.routes[route.state.index]?.name
      : route.params
      ? route.params.screen
      : "Home";

    return !["revenue"].includes(routeName);
  };

  return (
    <Tab.Navigator
      initialRouteName="revenue"
      screenOptions={({ route }) => ({ tabBarVisible: isTabBarVisible(route) })}
    >
      <Tab.Screen
        name="revenue"
        component={revenue}
        options={{ tabBarLabel: "Receitas" }}
      />
      <Tab.Screen
        name="expenditure"
        component={expenditure}
        options={{ tabBarLabel: "Despesas" }}
      />
    </Tab.Navigator>
  );
};

export default routes;