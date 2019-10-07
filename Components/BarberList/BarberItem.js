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
      barberID: this.props.barber.id //there is no id for the serializer
    });
  };

  render() {
    const { barber } = this.props;

    return (
      <Card>
        <CardItem>
          <Left>
            <TouchableHighlight onPress={this.handlePress}>
              <Thumbnail bordered source={{ uri: barber.image }} />
            </TouchableHighlight>
            <Text>{barber.name}</Text>

            {/* i will put ratings here later */}
            {/* i will put estimated time here later */}
          </Left>
        </CardItem>
      </Card>
    );
  }
}

export default withNavigation(BarberItem);
