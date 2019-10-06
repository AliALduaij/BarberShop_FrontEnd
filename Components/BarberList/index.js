// others
import React, { Component } from "react";
import { Spinner, Content, List, Text, Button } from "native-base";
import { observer } from "mobx-react";

// stores
import barberStore from "../../Stores/BarberStore";

// components
import BarberItem from "./BarberItem";
import style from "./style";
import list from "./TestData";

// the barberlist

class BarberList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Barbers",
    headerLeft: (
      <Button transparent onPress={() => navigation.openDrawer()}>
        <Text>...</Text>
      </Button>
    ),

    headerRight: null
  });
  render() {
    if (barberStore.loading) return <Spinner />;

    const barbers = barberStore.barbers.map(barber => (
      <BarberItem barber={barber} id={barber.id} />
    ));
    return (
      <Content>
        <List>{barbers}</List>
      </Content>
    );
  }
}
export default observer(BarberList);
