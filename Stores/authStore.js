import { decorate, observable, computed } from "mobx";
import jwt_decode from "jwt-decode";
import { AsyncStorage } from "react-native";
import { instance } from "./instance";

class AuthStore {
  user = null;
  isBarber = false;

  setUser = async token => {
    if (token) {
      await AsyncStorage.setItem("myToken", token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      const decodedUser = jwt_decode(token);
      this.user = decodedUser;
    } else {
      await AsyncStorage.removeItem("myToken");
      delete instance.defaults.headers.common.Authorization;

      this.user = null;
    }
  };

  signup = async (userData, navigation) => {
    if (this.isBarber) {
      try {
        const res = await instance.post("barber/register/", userData);
        const user = res.data;
        this.isBarber = user.barber;
        this.setUser(user.access);
        navigation.replace("Home");
      } catch (err) {
        console.error(err.response.data);
      }
    } else {
      try {
        const res = await instance.post("user/register/", userData);
        const user = res.data;
        this.isBarber = user.barber;
        this.setUser(user.access);
        navigation.replace("Home");
      } catch (err) {
        console.error(err.response.data);
      }
    }
  };

  login = async (userData, navigation) => {
    try {
      const res = await instance.post("login/", userData);
      const data = res.data;
      this.isBarber = data.barber;
      await this.setUser(data.access);
      navigation.navigate(this.isBarber ? "BarberStack" : "UserStack");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  logout = async navigation => {
    await this.setUser();
    navigation.navigate("Login");
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now() / 1000;
      const user = jwt_decode(token);
      if (user.exp >= currentTime) {
        await this.setUser(token);
      } else {
        this.logout();
      }
    }
  };
}

decorate(AuthStore, {
  user: observable,
  isBarber: observable
});

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
