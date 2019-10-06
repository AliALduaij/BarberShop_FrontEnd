import { createStackNavigator } from "react-navigation-stack";
import BarberList from "../Components/BarberList";

// Components

const BarberStack = createStackNavigator(
  {
    BarberList: BarberList
  },
  {
    initialRouteName: "BarberList",
    defaultNavigationOptions: {
      title: "Barbers"
    }
  }
);

export default BarberStack;
