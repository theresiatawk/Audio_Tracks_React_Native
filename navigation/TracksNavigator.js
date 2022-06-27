import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import MainScreen from "../screens/MainScreen";
import TracksDetailsScreen from "../screens/TracksDetailsScreen";

const TracksNavigator = createStackNavigator({
    Categories: MainScreen,
    TracksDetails: TracksDetailsScreen
});

export default createAppContainer(TracksNavigator);