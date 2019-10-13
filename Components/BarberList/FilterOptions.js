import React, { Component } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

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
        <Button title="Test" onPress={this.toggleModal} />
        <Modal
          isVisible={this.state.isModalVisible}
          onBackdropPress={this.closeModal}
        >
          <View>
            <Text>Hiii</Text>
            <Button title="Cancel" onPress={this.toggleModal} />
          </View>
        </Modal>
      </View>
    );
  }
}
