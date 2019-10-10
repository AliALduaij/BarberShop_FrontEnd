import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import TimePick from "./TimePick";

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
    const { barberID } = this.props;
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : "";
    return (
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={this.onDateChange}
          //   disabledDates={[new Date()]}  // for full bookings later
          minDate={new Date()}
        />
        <View>{/* <Text>SELECTED DATE:{startDate}</Text> */}</View>
        <TimePick barberID={barberID} />
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
