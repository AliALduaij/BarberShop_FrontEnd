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
    const foundItem = this.services.find(
      serviceItem => serviceItem.id === service.id
    ); // checks if service is in the array

    if (foundItem) {
      this.removeService(service); // if found service will be removed from array
    } else {
      this.services.push(service); // if not found service will be added to array
    }
  }; //
}

decorate(AddServicesStore, {
  services: observable
});

const addServicesStore = new AddServicesStore();

export default addServicesStore;
