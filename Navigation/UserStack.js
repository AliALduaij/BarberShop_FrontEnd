import { createStackNavigator } from "react-navigation-stack";

// Components
import BarberList from "../Components/BarberList";
import BarberDetail from "../Components/BarberDetail";
import Profile from "../Components/UserProfile";
import EditUserProfile from "../Components/UserProfile/EditProfile";

const UserStack = createStackNavigator(
  {
    BarberList: BarberList,
    BarberDetail: BarberDetail,
    Profile: Profile,
    EditUserProfile: EditUserProfile
  },
  {
    initialRouteName: "BarberList",
    defaultNavigationOptions: {
      title: "Barbers"
    }
  }
);

export default UserStack;
