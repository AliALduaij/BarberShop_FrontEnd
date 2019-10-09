import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

class Calendar extends Component {
  state = {
    selectedStartDate: null
  };

  onDateChange = date => {
    this.setState({
      selectedStartDate: date
    });
  };
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : "";
    return (
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={this.onDateChange}
          //   disabledDates={[new Date()]}  // for full bookings later
          minDate={new Date()}
        />
        <View>
          <Text>SELECTED DATE:{startDate}</Text>
        </View>
      </View>
    );
  }
}

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 100
  }
});
