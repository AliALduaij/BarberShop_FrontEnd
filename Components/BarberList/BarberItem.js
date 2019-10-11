import React, { Component } from "react";
import { withNavigation } from "react-navigation";

// for tags
import { Card, CardItem, Thumbnail, Text, Left } from "native-base";
import { TouchableHighlight } from "react-native-gesture-handler";

// style

//components

class BarberItem extends Component {
  handlePress = () => {
    this.props.navigation.navigate("BarberDetail", {
      barberID: this.props.barber.user //there is no id for the serializer
    });
  };

  render() {
    const { barber } = this.props;

    return (
      <Card>
        <TouchableHighlight onPress={this.handlePress}>
          <CardItem>
            <Left>
              <Thumbnail bordered source={{ uri: barber.image }} />

              <Text>{barber.name}</Text>

              {/* i will put ratings here later */}
              {/* i will put estimated time here later */}
            </Left>
          </CardItem>
        </TouchableHighlight>
      </Card>
    );
  }
}

export default withNavigation(BarberItem);
