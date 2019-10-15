import { createDrawerNavigator } from "react-navigation-drawer";

// Navigation
import customNavigator from "./customNavigator";
import BarberStack from "./BarberStack";

// Components
import Login from "../Components/Login";
import BarberList from "../Components/BarberList";
import SignUp from "../Components/SignUp";
import Profile from "../Components/UserProfile";
import BarberProfile from "../Components/BarberProfile";
import OrderList from "../Components/OrderList";
import UserStack from "./UserStack";
import authStore from "../Stores/authStore";
import { observer } from "mobx-react";
import Root from "./BarberStack";

// const userType = authStore.isBarber;

const DrawerNav = createDrawerNavigator(
  {
    Home: Root,
    Login: Login
  },
  {
    headerMode: "float",
    // drawerBackgroundColor: "transparent"
    contentComponent: customNavigator,
    initialRouteName: "Home",
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle"
  }
);

export default observer(DrawerNav);
