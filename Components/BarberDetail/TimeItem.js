import React, { Component, useState } from "react";
import moment from "moment";

// for tags
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  CheckBox,
  View,
  Button
} from "native-base";
import { TouchableHighlight } from "react-native-gesture-handler";
import { observer } from "mobx-react";
import addServicesStore from "../../Stores/AddServicesStore";

// style

//components

class TimeItem extends Component {
  render() {
    const { time } = this.props;
    // const newTime = moment(Date(time)).format("hh:mm:ss ");
    return (
      <Button
        onPress={() => addServicesStore.chooseTime(time.id)}
        bordered
        light
        style={{ height: 50, width: 110, margin: 5 }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            fontStyle: "italic",
            color: "white",
            paddingRight: 20
          }}
        >
          {time.time}
        </Text>
      </Button>
    );
  }
}

export default observer(TimeItem);
