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

const AppointmentCard = ({ appointment }) => {
  let newDate = moment(Date(appointment.date_and_time)).format("DD-MM-YYYY");
  let newTime = moment(Date(appointment.date_and_time)).format("h:mm:ss a");
  return (
    <Card>
      <CardItem>
        <Text>Barber Name: {appointment.barber_name}</Text>
      </CardItem>
      <CardItem>
        <Text>Client Name: {appointment.customer_name}</Text>
      </CardItem>
      <CardItem>
        <Text>Date: {newDate}</Text>
      </CardItem>
      <CardItem>
        <Text>Time: {newTime}</Text>
      </CardItem>
      <CardItem>
        {appointment.services.map(service => (
          <Text>Services: {service}</Text>
        ))}
      </CardItem>
    </Card>
  );
};

export default AppointmentCard;
