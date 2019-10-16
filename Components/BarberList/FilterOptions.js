import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Icon } from "native-base";

import Modal from "react-native-modal";

import { List } from "native-base";

export default class FilterOption extends Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button transparent onPress={this.toggleModal}>
          <Icon name="filter" type="Foundation" />
        </Button>
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={this.closeModal}
        >
          <View>
            <Text>Hiii</Text>
            <Button onPress={this.toggleModal}>
              <Text>Cancel</Text>
            </Button>
          </View>
        </Modal>
      </View>
    );
  }
}
