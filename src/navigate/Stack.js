import React from "react";
import { TabNavigation } from "./Tab";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Warn } from "../components/warn";
import { HairSoft } from "../components/hairSoft";
import { Dandruff } from "../components/dandruff";
import { Worn } from "../components/worn";

const Stack = createNativeStackNavigator();

const StackNavigation = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabNavigation" screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
        <Stack.Screen name="HairSoft" component={HairSoft} />
        <Stack.Screen name="Dandruff" component={Dandruff} />
        <Stack.Screen name="Worn" component={Worn} />

        <Stack.Screen name="Warn" component={Warn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export { StackNavigation };
