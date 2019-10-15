import { createStackNavigator } from "react-navigation-stack";

// Components
import BarberList from "../Components/BarberList";
import BarberDetail from "../Components/BarberDetail";
import Profile from "../Components/UserProfile";
import BarberOrUser from "../Components/BarberOrUser";

const UserStack = createStackNavigator(
  {
    BarberList: BarberList,
    BarberDetail: BarberDetail,
    Profile: Profile,
    BarberOrUser: BarberOrUser
  },
  {
    initialRouteName: "BarberList",
    defaultNavigationOptions: {
      title: "Barbers"
    }
  }
);

export default UserStack;
