import { createStackNavigator } from "react-navigation-stack";

// Components
import BarberList from "../Components/BarberList";
import BarberDetail from "../Components/BarberDetail";
import Profile from "../Components/UserProfile";

const BarberStack = createStackNavigator(
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

export default BarberStack;
