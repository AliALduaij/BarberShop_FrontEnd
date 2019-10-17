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
              <Button transparent onPress={() => this.handlePress("I kill")}>
                <Text style={styles.Text}>By Beard</Text>
              </Button>
            </List>
            <List>
              <Button transparent onPress={() => this.handlePress("I kill")}>
                <Text style={styles.Text}>Hair Cut</Text>
              </Button>
            </List>
            <List>
              <Button transparent onPress={() => this.handlePress("")}>
                <Text style={styles.Text}>All</Text>
              </Button>
            </List>
          </View>
          <Button
            style={styles.cancelButton}
            bordered
            light
            onPress={this.toggleModal}
          >
            <Text style={styles.cancelText}>Cancel</Text>
          </Button>
        </Modal>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  Text: {
    fontSize: 20,

    fontStyle: "italic",
    color: "white",
    paddingLeft: 16
  },
  cancelText: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "white",
    paddingLeft: 150
  },
  cancelButton: {
    marginTop: 40
  }
});
