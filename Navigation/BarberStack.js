import { createStackNavigator } from "react-navigation-stack";

// Components
import BarberList from "../Components/BarberList";
import BarberDetail from "../Components/BarberDetail";
import Profile from "../Components/UserProfile";
import OrderList from "../Components/OrderList";
import OrderDetail from "../Components/OrderDetail";

const BarberStack = createStackNavigator(
  {
    BarberList: BarberList,
    BarberDetail: BarberDetail,
    Profile: Profile,
    OrderList: OrderList, // i will move it later to another stack
    OrderDetail: OrderDetail // i will move it later to another stack
  },
  {
    initialRouteName: "BarberList",
    defaultNavigationOptions: {
      title: "Barbers"
    }
  }
);

export default BarberStack;
