import React from "react";
import { View } from "react-native";
import * as screens from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const TabNavigation = (props) => {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={screens.Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) return <MaterialCommunityIcons name="home-variant" color={"#86C8BC"} size={32} />;
            return <MaterialCommunityIcons name="home-variant-outline" color={"#355764"} size={size} />;
          },
        }}
      />

      <Tab.Screen
        name="Hair"
        component={screens.HairCare}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) return <MaterialCommunityIcons name="face-woman-shimmer" color={"#86C8BC"} size={32} />;
            return <MaterialCommunityIcons name="face-woman-shimmer-outline" color={"#355764"} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={screens.Favorite}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) return <MaterialCommunityIcons name="heart-multiple" color={"#86C8BC"} size={32} />;
            return <MaterialCommunityIcons name="heart-multiple-outline" color={"#355764"} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Skin"
        component={screens.SkinCare}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) return <MaterialCommunityIcons name="face-man-shimmer" color={"#86C8BC"} size={32} />;
            return <MaterialCommunityIcons name="face-man-shimmer-outline" color={"#355764"} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Nail"
        component={screens.NailCare}
        options={{
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) return <MaterialCommunityIcons name="hand-wash" color={"#86C8BC"} size={32} />;
            return <MaterialCommunityIcons name="hand-wash-outline" color={"#355764"} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export { TabNavigation };
