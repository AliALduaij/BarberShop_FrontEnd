import { createDrawerNavigator } from "react-navigation-drawer";

import customNavigator from "./customNavigator";
import BarberStack from "./BarberStack";

const DrawerNav = createDrawerNavigator(
  {
    Home: BarberStack
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
