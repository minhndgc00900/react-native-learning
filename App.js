import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import PractiseScreen from "./src/screens/PractiseScreen";
import ListScreen from "./src/screens/ListScreen";
import PractiseScreen2 from "./src/screens/PractiseScreen2";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    Practises: PractiseScreen,
    ListScreen: ListScreen,
    PractiseScreen2: PractiseScreen2,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
