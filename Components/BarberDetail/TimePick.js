import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

import Modal from "react-native-modal";

import barberStore from "../../Stores/BarberStore";
import TimeItem from "./TimeItem";
import { List, Button, Icon } from "native-base";
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
        <Button
          style={styles.TimeButton}
          transparent
          onPress={this.toggleModal}
        >
          <Icon name="clock" type="Feather" />
        </Button>
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={this.toggleModal}
        >
          <View>
            <List style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {times}
            </List>

            {/* cancel button will also clear time selected from the store */}
          </View>
          <Button
            bordered
            danger
            style={styles.Cancel}
            onPress={this.handlePress}
          >
            <Text style={styles.CancelText}>Cancel</Text>
          </Button>

          <Button
            style={styles.Confirm}
            bordered
            success
            onPress={this.toggleModal}
          >
            <Text style={styles.ConfirmText}>Confirm</Text>
          </Button>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TimeButton: {
    position: "absolute",
    bottom: 15,
    right: 180
  },
  Cancel: {
    position: "absolute",
    bottom: 10,
    right: 50,
    height: 50,
    width: 100
  },
  CancelText: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "red",
    paddingLeft: 16
  },
  Confirm: {
    position: "absolute",
    bottom: 10,
    left: 50,
    height: 50,
    width: 100
  },
  ConfirmText: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "green",
    paddingLeft: 10
  }
});
