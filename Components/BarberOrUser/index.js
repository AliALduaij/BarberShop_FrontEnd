import React, { Component } from "react";
import authStore from "../../Stores/authStore";

import OrderList from "../OrderList";
import BarberList from "../BarberList";
import { observer } from "mobx-react";

class BarberOrUser extends Component {
  render() {
    if (authStore.isBarber) {
      return <OrderList />;
    } else {
      return <BarberList />;
    }
  }
}

export default observer(BarberOrUser);
