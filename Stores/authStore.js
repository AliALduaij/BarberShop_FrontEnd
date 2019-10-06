import { decorate, observable, computed } from "mobx";
import jwt_decode from "jwt-decode";
import { AsyncStorage } from "react-native";
import { instance } from "./instance";

class AuthStore {
  user = null;

  setUser = async token => {
    if (token) {
      await AsyncStorage.setItem("myToken", token);
      instance.defaults.headers.common.Authorization = `JWT ${token}`;
      const decodedUser = jwt_decode(token);
      this.user = decodedUser;
    } else {
      await AsyncStorage.removeItem("myToken");
      delete instance.defaults.headers.common.Authorization;

      this.user = null;
    }
  };

  signup = async (userData, navigation) => {
    try {
      await instance.post("user/register/", userData);
      this.login(userData, navigation);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  login = async (userData, navigation) => {
    try {
      const res = await instance.post("barber/login/", userData);
      const data = res.data;
      this.setUser(data.token);
      navigation.replace("BarberList");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  logout = navigation => {
    this.setUser();
    navigation.replace("Login");
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now() / 1000;
      const user = jwt_decode(token);
      if (user.exp >= currentTime) {
        this.setUser(token);
      } else {
        this.logout();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable
});

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
