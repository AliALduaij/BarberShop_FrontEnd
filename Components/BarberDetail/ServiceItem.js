import React, { Component, useState } from "react";
import { withNavigation } from "react-navigation";
import { View, Text } from "react-native";
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
    useChecked(!checked);
    addServicesStore.addService(service.id);
  };

  return (
    <View>
      <Collapse>
        <CollapseHeader>
          <Separator bordered>
            <Text>{service.name}</Text>

            <CheckBox checked={checked} color="green" onPress={handlePress} />
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
