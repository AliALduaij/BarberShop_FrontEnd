import { createStackNavigator } from "react-navigation-stack";
import { createSwitchNavigator } from "react-navigation";

// Components

import OrderList from "../Components/OrderList";
import OrderDetail from "../Components/OrderDetail";
import BarberProfile from "../Components/BarberProfile";

import authStore from "../Stores/authStore";

import BarberList from "../Components/BarberList";
import BarberDetail from "../Components/BarberDetail";
import CreateAppointment from "../Components/BarberProfile/CreateAppointment";
import Profile from "../Components/UserProfile";
import { observer } from "mobx-react";

// const userType = authStore.isBarber;

const BarberStack = createStackNavigator(
  {
    Profile: BarberProfile,
    OrderList: OrderList,
    OrderDetail: OrderDetail,
    CreateAppointment: CreateAppointment
  },
  {
    initialRouteName: "OrderList",
    defaultNavigationOptions: {
      title: "Orders"
    }
  }
);

const UserStack = createStackNavigator(
  {
    BarberList: BarberList,
    BarberDetail: BarberDetail,
    Profile: Profile
  },
  {
    initialRouteName: "BarberList",
    defaultNavigationOptions: {
      title: "Barbers"
    }
  }
);

const Root = createSwitchNavigator(
  {
    BarberStack: BarberStack,

    UserStack: UserStack
  },
  {
    initialRouteName: "UserStack"
  }
);

export default observer(Root);
