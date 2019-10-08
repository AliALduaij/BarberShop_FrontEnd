// others
import React from "react";
import { Spinner, Content, List, Text, Button } from "native-base";
import { observer } from "mobx-react";

// stores
import barberStore from "../../Stores/BarberStore";

// components
import BarberItem from "./BarberItem";
import style from "./style";
import list from "./TestData";

// the barberlist

const BarberList = () => {
  if (barberStore.loading) return <Spinner />;

  const barbers = barberStore.barbers.map(barber => (
    <BarberItem barber={barber} key={barber.user} />
  ));
  return (
    <Content>
      <List>{barbers}</List>
    </Content>
  );
};

BarberList.navigationOptions = ({ navigation }) => ({
  title: "Barbers",
  headerLeft: (
    <Button transparent onPress={() => navigation.openDrawer()}>
      <Text>...</Text>
    </Button>
  ),

  headerRight: null
});

export default observer(BarberList);
