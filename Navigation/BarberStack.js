import { createStackNavigator } from "react-navigation-stack";

// Components

import OrderList from "../Components/OrderList";
import OrderDetail from "../Components/OrderDetail";
import BarberProfile from "../Components/BarberProfile";

const BarberStack = createStackNavigator(
  {
    Profile: BarberProfile,
    OrderList: OrderList,
    OrderDetail: OrderDetail
  },
  {
    initialRouteName: "OrderList",
    defaultNavigationOptions: {
      title: "Orders"
    }
  }
);

export default BarberStack;
