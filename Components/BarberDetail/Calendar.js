import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import TimePick from "./TimePick";
import barberStore from "../../Stores/BarberStore";
import moment from "moment";

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
    const barber = barberStore.barbers.find(
      barbers => barbers.user === barberID
    );

    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : "";
    const dates = barber.appointments.dates.map(date => date.date);
    newDate = moment(startDate).format("YYYY-MM-DD");

    return (
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={this.onDateChange}
          // disabledDates={!dates} // for full bookings later
          minDate={new Date()}
        />
        <View></View>
        <TimePick barberID={barberID} date={newDate} />
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
