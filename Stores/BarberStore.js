import { instance } from "./instance";
import { observable, decorate } from "mobx";

class BarberStore {
  barbers = null; //barbers list
  loading = true;
  query = ""; // for search bar LATER!!

  //this will fetch barbers list from backend
  fetchBarbers = async () => {
    try {
      const res = await instance.get("barber/list/");
      const barbers = res.data;

      this.barbers = barbers;
      this.loading = false;
    } catch (err) {
      console.log("I'm an ERROR", err);
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
