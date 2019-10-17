import React, { Component, useState } from "react";
import { withNavigation } from "react-navigation";
import { View, Text } from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody
} from "accordion-collapse-react-native";

import {
  Thumbnail,
  List,
  ListItem,
  Separator,
  CheckBox,
  Right,
  Body,
  Left
} from "native-base";

// for tags

import { TouchableOpacity } from "react-native-gesture-handler";

// style
import styles from "../BarberList/style";
// stores
import addServicesStore from "../../Stores/AddServicesStore";

//components

const ServiceItem = ({ service }) => {
  const [checked, useChecked] = useState(false); //Google React Hooks

  handlePress = () => {
    if (checked) {
      addServicesStore.removeService(service.id);
    } else {
      addServicesStore.addService(service.id);
      console.log("sereID", service.id);
    }
    useChecked(!checked);
  };

  return (
    <>
      <Collapse>
        <CollapseHeader style={{ height: 50 }}>
          <Separator bordered>
            <CheckBox checked={checked} color="green" onPress={handlePress} />
            <Text style={styles.textBody}>{service.name}</Text>
          </Separator>
        </CollapseHeader>
        <CollapseBody>
          <ListItem>
            <Text>Description: {service.description}</Text>
          </ListItem>
          <ListItem>
            <Text> Duration: {service.duration}</Text>
          </ListItem>
          <ListItem last>
            <Text> Price: {service.price} KWD</Text>
          </ListItem>
          <ListItem></ListItem>
        </CollapseBody>
      </Collapse>
    </>
  );
};

export default withNavigation(ServiceItem);
