import React, { Component } from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Content
} from "native-base";

// Style

//Store
import barberStore from "../../Stores/BarberStore";

// Components
import ServiceItem from "./ServiceItem";

class BarberDetail extends Component {
  state = {};

  render() {
    const barberID = this.props.navigation.getParam("barberID");
    const barber = barberStore.barbers.find(
      barbers => barbers.user === barberID
    );
    const services = barber.services.map(service => (
      <ServiceItem service={service} id={service.id} />
    ));
    console.log("services", services);

    return (
      <Content>
        <List>
          <ListItem>
            <Left>
              <Text>{barber.name + "\n"}</Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{ uri: barber.image }} />
            </Right>
          </ListItem>
          <ListItem></ListItem>
          {services}
          <Button full danger>
            <Text>Book</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

export default withNavigation(observer(BarberDetail));
