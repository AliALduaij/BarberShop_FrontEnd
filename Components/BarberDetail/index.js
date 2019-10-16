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
import Calendar from "./Calendar";
import addServicesStore from "../../Stores/AddServicesStore";
import authStore from "../../Stores/authStore";

class BarberDetail extends Component {
  state = {};

  render() {
    const barberID = this.props.navigation.getParam("barberID");
    const barber = barberStore.barbers.find(
      barbers => barbers.user === barberID
    );
    const services = barber.services.map(service => (
      <ServiceItem service={service} key={service.id} />
    ));

    return (
      <Content>
        <List>
          <ListItem>
            <Left>
              <Text>
                {barber.name + "\n\n"}
                <Text>
                  Nationality: {barber.nationality + "\n\n"}
                  <Text>Experience: {barber.experience + "\n\n"}</Text>
                </Text>
              </Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{ uri: barber.image }} />
            </Right>
          </ListItem>
          {services}
          {barber.appointments ? (
            <Calendar barberID={barberID} />
          ) : (
            <Text>This barber has no appointments.</Text>
          )}
          <Button
            onPress={() =>
              authStore.user
                ? addServicesStore.bookService(this.props.navigation)
                : alert("You need to login")
            }
            full
            danger
          >
            <Text>Book</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

export default withNavigation(observer(BarberDetail));
