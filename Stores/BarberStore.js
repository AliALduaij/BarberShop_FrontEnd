import { instance } from "./instance";
import { observable, decorate } from "mobx";

class BarberStore {
  barbers = []; //barbers list
  loading = true;
  query = ""; // for search bar

  //this will fitch barbers list from backend
  fetchBarbers = async () => {
    try {
      const res = instance.get("/barber");
      const barbers = res.data;
      this.barbers = barbers;
      this.loading = false;
      console.log("barbers", barbers);
    } catch (err) {
      console.error(err);
    }
  };
}
decorate(BarberStore, {
  barbers: observable,
  loading: observable,
  query: observable
});

const barberStore = new BarberStore();
barberStore.fetchBarbers();

export default barberStore; // so i can import barberStore in other files
