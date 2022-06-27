import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import MainScreen from "../screens/MainScreen";
import TracksDetailsScreen from "../screens/TracksDetailsScreen";
import Colors from "../constants/Colors";

const TracksNavigator = createStackNavigator(
  {
    Categories: MainScreen,
    TracksDetails: TracksDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  }
);
export default createAppContainer(TracksNavigator);
