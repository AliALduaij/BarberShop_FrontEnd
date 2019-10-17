import React, { Component } from "react";
import { DatePickerIOS, View, StyleSheet } from "react-native";
import { Button, Text, Icon } from "native-base";
import Modal from "react-native-modal";
import profileStore from "../../Stores/profileStore";

export default class CreatAppointment extends Component {
  state = {
    date_and_time: new Date(),
    isModalVisible: false
  };

  setDate = newDate => {
    this.setState({ date_and_time: newDate });
  };
  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <View>
        <Button
          style={styles.TimeButton}
          transparent
          onPress={this.toggleModal}
        >
          <Icon
            color="black"
            name="calendar-plus"
            type="MaterialCommunityIcons"
          />
        </Button>
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={this.toggleModal}
          backdropColor="white"
          backdropOpacity={1}
        >
          <View style={styles.container}>
            <DatePickerIOS
              date={this.state.date_and_time}
              onDateChange={this.setDate}
            />
            <Button
              title="Add appointment."
              onPress={() => profileStore.createAppointment(this.state)}
            >
              <Text>Add appointment.</Text>
            </Button>

            <Button onPress={this.toggleModal}>
              <Text>Cancel</Text>
            </Button>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  }
});
