import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button, Icon } from "native-base";

import Modal from "react-native-modal";

import { List } from "native-base";
import barberStore from "../../Stores/BarberStore";

export default class FilterOption extends Component {
  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  handlePress = query => {
    this.toggleModal();
    barberStore.query = query;
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
            <Text>Filter By</Text>
            <List>
              <Button onPress={() => this.handlePress("I kill")}>
                <Text>By Beard</Text>
              </Button>
            </List>
            <List>
              <Button onPress={() => this.handlePress("I kill")}>
                <Text>Hair Cut</Text>
              </Button>
            </List>
            <List>
              <Button onPress={() => this.handlePress("")}>
                <Text>All</Text>
              </Button>
            </List>
            <Button onPress={this.toggleModal}>
              <Text>Cancel</Text>
            </Button>
          </View>
        </Modal>
      </View>
    );
  }
}
