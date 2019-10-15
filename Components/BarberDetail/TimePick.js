import React, { Component } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

import Modal from "react-native-modal";

import barberStore from "../../Stores/BarberStore";
import TimeItem from "./TimeItem";
import { List } from "native-base";
import addServicesStore from "../../Stores/AddServicesStore";

export default class TimePick extends Component {
  state = {
    isModalVisible: false,
    selectedTime: null
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  handlePress = () => {
    this.toggleModal();
    addServicesStore.removeTime();
  };

  render() {
    const { barberID, date } = this.props;
    const barber = barberStore.barbers.find(
      barbers => barbers.user === barberID
    );
    let times = [];
    const foundDate = barber.appointments.dates.find(
      newDate => newDate.date === date
    );
    if (foundDate)
      times = foundDate.times.map(time => <TimeItem time={time} />);
    return (
      <View style={{ flex: 1 }}>
        <Button title="Time" onPress={this.toggleModal} />
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={this.toggleModal}
        >
          <View>
            <List style={{ flexDirection: "row" }}>{times}</List>
            <Button title="Cancel" onPress={this.handlePress} />
            {/* cancel button will also clear time selected from the store */}
            <Button title="Confirm" />
          </View>
        </Modal>
      </View>
    );
  }
}
