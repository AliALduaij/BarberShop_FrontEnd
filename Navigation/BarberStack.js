import { createStackNavigator } from "react-navigation-stack";

// Components
import BarberList from "../Components/BarberList";
import BarberDetail from "../Components/BarberDetail";

const BarberStack = createStackNavigator(
  {
    BarberList: BarberList,
    BarberDetail: BarberDetail
  },
  {
    initialRouteName: "BarberList",
    defaultNavigationOptions: {
      title: "Barbers"
    }
  }
);

export default BarberStack;
