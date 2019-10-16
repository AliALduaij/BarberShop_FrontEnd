import React from "react";
import moment from "moment";

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
  Right
} from "native-base";

const ServiceCard = ({ service }) => {
  //   let newDate = moment(Date(appointment.date_and_time)).format("DD-MM-YYYY");
  //   let newTime = moment(Date(appointment.date_and_time)).format("hh:mm:ss");
  return (
    <Card>
      <CardItem>
        <Text> Name: {service.name}</Text>
      </CardItem>
      <CardItem>
        <Text> Price: {service.price}</Text>
      </CardItem>
      <CardItem>
        <Text>Description: {service.description}</Text>
      </CardItem>
      <CardItem>
        <Text>Duration: {service.duration}</Text>
      </CardItem>
    </Card>
  );
};

export default ServiceCard;
