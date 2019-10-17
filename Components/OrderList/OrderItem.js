import React, { Component } from "react";
import moment from "moment";
import { StyleSheet } from "react-native";

// Component

// NativeBase Components
import {
  Card,
  CardItem,
  Text,
  Button,
  Spinner,
  Container,
  Header,
  Content,
  Accordion,
  List,
  ListItem,
  Left,
  Thumbnail,
  Body,
  Right,
  View
} from "native-base";
import { withNavigation } from "react-navigation";
import addServicesStore from "../../Stores/AddServicesStore";

class OrderItem extends Component {
  render() {
    const { order } = this.props;

    handlePress = () => {
      this.props.navigation.navigate("OrderDetail", {
        orderID: this.props.order.id //there is no id for the serializer
      });
    };

    handleFinish = () => {
      addServicesStore.appointmentID = this.props.order.id;
      addServicesStore.finishedAppointment();
    };

    let newDate = moment(Date(order.date_and_time)).format("DD-MM-YYYY");
    let newTime = moment(order.date_and_time).format("hh:mm:ss");
    return (
      <Card>
        <CardItem>
          <Text>Client Name: {order.customer_name}</Text>
        </CardItem>
        <CardItem>
          <Text>Date: {newDate}</Text>
        </CardItem>
        <CardItem>
          <Text>Time: {newTime}</Text>
        </CardItem>
        {/* <CardItem>
        {order.services.map(service => (
          <Text>Services: {service}</Text>
        ))}
      </CardItem> */}
        <CardItem>
          <Body>
            <Button bordered dark style={styles.finish2} onPress={handleFinish}>
              <Text>Finished job</Text>
            </Button>
          </Body>
          <Left>
            <Button bordered dark style={styles.detail} onPress={handlePress}>
              <Text>Detail</Text>
            </Button>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(OrderItem);

const styles = StyleSheet.create({
  detail: {
    width: 100,
    height: 45,
    right: 20,
    bottom: 10,
    paddingLeft: 10
  },
  finish2: {
    width: 100,
    height: 45,
    left: 290,
    bottom: 10
  }
});
