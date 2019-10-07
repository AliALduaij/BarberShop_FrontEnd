import { decorate, observable, action, computed } from "mobx";
import { instance } from "./instance";
class ProfileStore {
  profile = "";
  loading = true;
  carts = [];
  cart = "";
  notifications = [];
  fetchProfile = async () => {
    try {
      let res = await instance.get("profile/");
      this.profile = res.data;
      this.loading = false;
    } catch (err) {
      console.error(err.stack);
    }
  };
  fetchNotification = async () => {
    try {
      let res = await instance.get("notification/");
      this.notifications = res.data;
      this.loading = false;
    } catch (err) {
      if (res.status === 404) {
        this.notifications = [];
      } else {
        console.error(err.status);
      }
    }
  };

  // the two below functions will be used to fetch APPOINTMENT history and adding an appointment (adding needs adjustments)

  addToHistory = cart => {
    this.carts.push(cart);
  };
  fetchHistory = async () => {
    try {
      const res = await instance.get("cart/history/");
      this.carts = res.data;
      this.loading = false;
    } catch (err) {
      if (res.status === 404) {
        carts = [];
      } else {
        console.error(err.status);
      }
    }
  };
}
decorate(ProfileStore, {
  fetchProfile: action,
  fetchHistory: action,
  addToHistory: action,
  carts: observable,
  cart: observable,
  profile: observable,
  loading: observable
});

let profileStore = new ProfileStore();

export default profileStore;
