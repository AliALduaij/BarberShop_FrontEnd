// others
import React, { Component } from "react";
import { Spinner, Content, List, Text, Button, Icon } from "native-base";
import { observer } from "mobx-react";

// stores
import profileStore from "../../Stores/profileStore";
import authStore from "../../Stores/authStore";
import OrderItem from "./OrderItem";

// components

// the barberlist

class OrderList extends Component {
  componentDidMount() {
    if (authStore.user) {
      profileStore.fetchBarberProfile(); //
    }
  }

  render() {
    if (profileStore.loading) return <Spinner />;

    const orders = profileStore.profile.future_appointments.filter(
      order => order.available == false
    );

    const future_order = orders.map(order => (
      <OrderItem order={order} key={order.id} />
    ));

    return (
      <Content>
        <List>{future_order}</List>
      </Content>
    );
  }
}
OrderList.navigationOptions = ({ navigation }) => ({
  title: "Orders",
  headerLeft: (
    <Button transparent onPress={() => navigation.openDrawer()}>
      <Icon name="list" type="Feather" />
    </Button>
  ),

  headerRight: null
});
//
export default observer(OrderList);
