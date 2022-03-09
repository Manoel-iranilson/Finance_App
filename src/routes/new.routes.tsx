import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import revenue from "../screens/New/revenue/Index";
import expenditure from "../screens/New/expenditure/Index";

const routes: React.FC = () => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator initialRouteName="revenue">
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
