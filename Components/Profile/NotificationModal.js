import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text
} from "native-base";
import { observer } from "mobx-react";
import { View, Modal } from "react-native";
import profileStore from "../../stores/profileStore";

class NotificationModal extends Component {
  componentDidMount = () => {
    profileStore.notifications.forEach(notification =>
      console.log(notification)
    );
  };

  render() {
    let listItems = profileStore.notifications.map(notification => {
      return <Text>{notification.message}</Text>;
    });
    console.log("LIST", listItems);

    let visibility = this.props.visibility;
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={visibility}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View
          style={{
            marginTop: 60,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <View
            style={{
              padding: 10,
              width: "90%",
              backgroundColor: "#f1f2f2",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text style={{ fontSize: 20, color: "#6d6e71" }}>
              Your Notifications
            </Text>
          </View>
          {listItems}
        </View>
      </Modal>
    );
  }
}

export default withNavigation(observer(NotificationModal));
