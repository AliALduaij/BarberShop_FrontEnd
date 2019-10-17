import { decorate, observable, action, computed } from "mobx";
import { instance } from "./instance";
import authStore from "./authStore";
class ProfileStore {
  profile = null;
  loading = true;
  carts = [];
  cart = "";
  notifications = [];
  fetchProfile = async () => {
    try {
      console.log("moh yaw", authStore.isBarber);
      authStore.isBarber
        ? (res = await instance.get("barber/profile/"))
        : (res = await instance.get("user/profile/"));

      this.profile = res.data;
      this.loading = false;
    } catch (err) {
      console.error(err.response.data);
    }
  };
  fetchBarberProfile = async () => {
    try {
      let res = await instance.get("barber/profile/");
      this.profile = res.data;
      this.loading = false;
    } catch (err) {
      console.error(err.stack);
    }
  };

  updateUserProfile = async (updatedData, navigation) => {
    try {
      let res = await instance.put("user/profile/update/", updatedData);
      await this.fetchProfile();
      // const updatedProfile = res.data;
      // this.profile = updatedProfile;
      navigation.replace("Profile");
    } catch (err) {
      console.log(err.response.data);
    }
  };

  createAppointment = async appointmentData => {
    try {
      let res = await instance.post(
        "barber/appointment/create/",
        appointmentData
      );
      alert("Appointment added successfully.");
    } catch (err) {
      console.log(err.response.data);
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
