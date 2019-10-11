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

const userType = "barber";

const DrawerNav = createDrawerNavigator(
  {
    Home: BarberStack,
    Login: Login,
    SignUp: SignUp,
    // Profile: {
    //   screen: () => (userType === "barber" ? BarberProfile : Profile)
    // },
    UserProfile: Profile,
    BarberProfile: BarberProfile,
    OrderList: OrderList
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
