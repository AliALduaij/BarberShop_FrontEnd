import { instance } from "./instance";
import { observable, decorate } from "mobx";

class AddServicesStore {
  services = []; //service list
  timeID = "";

  removeService = service => {
    this.services = this.services.filter(
      serviceItem => serviceItem !== service
    ); // to remove service from the array
  };

  addService = service => {
    this.services.push(service); // if not found service will be added to array
  };

  chooseTime = time => {
    this.timeID = time;
    console.log("HowUDoin?", this.timeID);
  };

  removeTime = () => {
    this.timeID = "";
    console.log("HowUDoinCancel?", this.timeID);
  };

  bookService = async () => {
    try {
      const res = await instance.put(
        `barber/appointment/update/${this.timeID}`,
        this.services
      );
      this.services = [];
      this.timeID = "";
      navigation.navigate("Home");
    } catch (err) {
      console.log("I'm an ERROR", err);
    }
  };
}

decorate(AddServicesStore, {
  services: observable,
  timeID: observable
});

const addServicesStore = new AddServicesStore();

export default addServicesStore;
