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

class BarberDetail extends Component {
  state = {};

  render() {
    const barberID = this.props.navigation.getParam("barberID");
    const barber = barberStore.barbers.find(barbers => barbers.id === barberID);

    return (
      <Content>
        <List>
          <ListItem>
            <Left>
              <Text>
                {barber.name + "\n"}
                {/* <Text>{barber.services}</Text> */}
              </Text>
            </Left>
            <Body />
            <Right>
              <Thumbnail bordered source={{ uri: barber.image }} />
            </Right>
          </ListItem>
          <ListItem></ListItem>
          <Button full danger>
            <Text>Book</Text>
          </Button>
        </List>
      </Content>
    );
  }
}

export default withNavigation(observer(BarberDetail));
