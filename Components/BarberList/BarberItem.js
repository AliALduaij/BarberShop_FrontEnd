import React, { Component } from "react";

// for tags
import { Card, CardItem, Thumbnail, Text, Left } from "native-base";
import { TouchableHighlight } from "react-native-gesture-handler";

// style
import style from "./style";

class BarberItem extends Component {
  render() {
    const { barber } = this.props;
    console.log(barber, "in barber item");
    return (
      <Card>
        <CardItem>
          <Left>
            <TouchableHighlight>
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

export default BarberItem;
