import { instance } from "./instance";
import { observable, decorate, computed } from "mobx";

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
    const res = await instance.post("barber/list/");
    const barbers = res.data;
    console.log("baarbers", barbers);
    this.barbers = [];
    this.loading = false;
  } catch (err) {
    console.log("I'm an ERROR", err);
  }
};

decorate(AddServicesStore, {
  services: observable,
  isModalVisible: observable,
  toggleModal: computed
});

const addServicesStore = new AddServicesStore();

export default addServicesStore;
