import React, { Component } from "react";
import { DatePickerIOS, View, StyleSheet } from "react-native";
import { Button, Text } from "native-base";
import profileStore from "../../Stores/profileStore";

export default class CreatAppointment extends Component {
  constructor(props) {
    super(props);
    this.state = { date_and_time: new Date() };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ date_and_time: newDate });
  }

  render() {
    return (
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
