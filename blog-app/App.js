import "react-native-gesture-handler";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { Provider } from "./src/contexts/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const Navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blog Post",
    },
  }
);

const App = createAppContainer(Navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
