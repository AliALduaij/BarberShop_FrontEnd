import React, { Component } from "react";
import moment from "moment";

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
  Content,
  Card,
  CardItem
} from "native-base";
import { withNavigation } from "react-navigation";

// Style

//Store
import profileStore from "../../Stores/profileStore";
// Components

class OrderDetail extends Component {
  render() {
    const orderID = this.props.navigation.getParam("orderID");
    const order = profileStore.profile.future_appointments.find(
      orders => orders.id === orderID
    );

    let newDate = moment(Date(order.date_and_time)).format("DD-MM-YYYY");
    let newTime = moment(order.date_and_time).format("hh:mm:ss");

    return (
      <Card>
        <CardItem>
          <Text>{order.customer_name}</Text>
        </CardItem>
        <CardItem>
          <Text>Date: {newDate}</Text>
        </CardItem>
        <CardItem>
          <Text>Time: {newTime}</Text>
        </CardItem>
        <CardItem>
          {order.services.map(service => (
            <Text>Services: {service}</Text>
          ))}
        </CardItem>
        <CardItem>
          <Text>Adress: {order.adress}</Text>
        </CardItem>
      </Card>
    );
  }
}

export default OrderDetail;
