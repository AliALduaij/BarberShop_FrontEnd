import { createDrawerNavigator } from "react-navigation-drawer";

import customNavigator from "./customNavigator";
import BarberStack from "./BarberStack";
import Login from "../Components/Login";
import BarberList from "../Components/BarberList";

const DrawerNav = createDrawerNavigator(
  {
    Home: BarberStack,
    Login: Login
  },
  {
    headerMode: "float",
    // drawerBackgroundColor: "transparent"
    contentComponent: customNavigator,
    initialRoutteName: "Home",
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle"
  }
);

export default DrawerNav;
