import { instance } from "./instance";
import { observable, decorate } from "mobx";

class AddServicesStore {
  services = []; //service list
  timeID = "";
  appointmentID = "";

  removeService = service => {
    this.services = this.services.filter(
      serviceItem => serviceItem !== service
    ); // to remove service from the array
  };

  addService = service => {
    this.services.push(service); // if not found service will be added to array
    console.log("Sdfsdf", this.services);
  };

  chooseTime = time => {
    this.timeID = time;
    console.log("HowUDoin?", this.timeID);
  };

  removeTime = () => {
    this.timeID = "";
    console.log("HowUDoinCancel?", this.timeID);
  };

  bookService = async navigation => {
    try {
      const res = await instance.put(
        `user/appointment/update/${this.timeID}/`,
        {
          services: this.services
        }
      );
      this.services = [];
      this.timeID = "";
      console.log("yaw yaw", this.services, this.timeID);
      navigation.replace("BarberList");
    } catch (err) {
      console.log("I'm an ERROR", err.response.data);
    }
  };
  finishedAppointment = async () => {
    try {
      const res = await instance.put(
        `barber/appointment/update/${this.appointmentID}/`
      );
      alert("Job finished");
    } catch (err) {
      console.log("I'm an ERROR", err.response.data);
    }
  };
}

decorate(AddServicesStore, {
  services: observable,
  timeID: observable,
  appointmentID: observable
});

const addServicesStore = new AddServicesStore();

export default addServicesStore;
