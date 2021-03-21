import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomeScreen from "../veiw screens/HomeScreen";
import DetailsScreen from "../veiw screens/DetailsScreen";

const stackNavigator = createStackNavigator(
  {
    home: HomeScreen,
    details: DetailsScreen,
  },
  {
    headerMode: "none",
  }
);

export default createAppContainer(stackNavigator);
