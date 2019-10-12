import React, { Component, useState } from "react";
import { withNavigation } from "react-navigation";
import { View, Text, Left } from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody
} from "accordion-collapse-react-native";
import { Thumbnail, List, ListItem, Separator, CheckBox } from "native-base";

// for tags

import { TouchableOpacity } from "react-native-gesture-handler";

// style

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
    }
    useChecked(!checked);
  };

  return (
    <View>
      <Collapse>
        <CollapseHeader>
          <Separator bordered>
            <CheckBox checked={checked} color="green" onPress={handlePress} />

            <Text>{service.name}</Text>
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
        </CollapseBody>
      </Collapse>
    </View>
  );
};

export default withNavigation(ServiceItem);
