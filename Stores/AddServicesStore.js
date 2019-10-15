import { instance } from "./instance";
import { observable, decorate } from "mobx";

class AddServicesStore {
  services = []; //service list

  removeService = service => {
    this.services = this.services.filter(
      serviceItem => serviceItem !== service
    ); // to remove service from the array
  };

  addService = service => {
    this.services.push(service); // if not found service will be added to array
  };
}

bookService = async () => {
  try {
    const res = await instance.get("barber/list/");
    const barbers = res.data;
    console.log("baarbers", barbers);
    this.barbers = barbers;
    this.loading = false;
  } catch (err) {
    console.log("I'm an ERROR 2", err);
  }
};

decorate(AddServicesStore, {
  services: observable
});

const addServicesStore = new AddServicesStore();

export default addServicesStore;
