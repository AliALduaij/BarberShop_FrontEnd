import { instance } from "./instance";
import { observable, decorate, computed } from "mobx";

class BarberStore {
  barbers = null; //barbers list
  loading = true;
  is_searching = false;
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

  get filterBy() {
    // const beard = this.barbers.filter(aBeard =>
    if (this.query === "") return this.barbers;
    const beard = this.barbers.filter(beards => {
      if (beards.services.find(beerd => beerd.name === this.query)) {
        return true;
      }
    });
    return beard;
  }
}
decorate(BarberStore, {
  barbers: observable,
  loading: observable,
  query: observable,
  filterBy: computed
});

const barberStore = new BarberStore();
barberStore.fetchBarbers();

export default barberStore; // so i can import barberStore in other files
