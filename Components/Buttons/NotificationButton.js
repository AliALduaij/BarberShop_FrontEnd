import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Button, Text, Icon } from "native-base";
import { observer } from "mobx-react";
import { TouchableHighlight, View, Modal } from "react-native";
import cartStore from "../../stores/cartStore";
import NotificationModal from "../Profile/NotificationModal";

class NotificationButton extends Component {
  state = {
    visibility: false
  };
  componentWillMount() {
    this.setState({ visibility: false });
  }

  handleClick(visible) {
    console.log("CLICKED!");
    this.setState({ visibility: visible });
  }
  render() {
    return (

      <>
        <Button
          light
          transparent
          onPress={() => {
            this.handleClick(!this.state.visibility);
          }}
        >
          <Text style={{ color: "red", fontSize: 15 }}>
            <Icon
              type="FontAwesome"
              name="bell"
              style={{ color: "red", fontSize: 15 }}
            />
          </Text>
        </Button>
        <NotificationModal visibility={this.state.visibility} />
      </>
    );
  }
}

export default withNavigation(observer(NotificationButton));
