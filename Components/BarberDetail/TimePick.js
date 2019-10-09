import React, { Component } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

import Modal from "react-native-modal";

import barberStore from "../../Stores/BarberStore";
import TimeItem from "./TimeItem";
import { List } from "native-base";

export default class TimePick extends Component {
  state = {
    isModalVisible: false,
    selectedTime:null
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  selectTime=()

  render() {
    const { barberID } = this.props;
    const barber = barberStore.barbers.find(
      barbers => barbers.user === barberID
    );
    const times = barber.future_appointments.map(time => (
      <TimeItem time={time.date_and_time} />
    ));

    return (
      <View style={{ flex: 1 }}>
        <Button title="Time" onPress={this.toggleModal} />
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={this.closeModal}
        >
          <View>
            <List style={{ flexDirection: "row" }}>{times}</List>
            <Button title="Cancel" onPress={this.toggleModal} />  
            {/* cancel button will also clear time selected from the store */}
            <Button title="Confirm" onPress={}/>
            
          </View>
        </Modal>
      </View>
    );
  }
}
