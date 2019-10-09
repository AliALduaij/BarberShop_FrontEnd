import React, { Component } from "react";
import { observer } from "mobx-react";

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

// Stores
import authStore from "../../Stores/authStore";
import profileStore from "../../Stores/ProfileStore";
// import cartStore from "../../stores/cartStore";

//Components
import AppointmentCard from "../BarberProfile/AppointmentCard";

//Buttons
// import NotificationButton from "../Buttons/NotificationButton";

class BarberProfile extends Component {
  // static navigationOptions = ({ navigation }) => ({
  // title: "Profile Page",
  // headerLeft: null
  // headerRight: <NotificationButton />
  // });

  handlePress = item => {
    this.props.navigation.navigate("CarDetail", {
      item: item
    });
  };
  componentDidMount() {
    if (authStore.user) {
      profileStore.fetchBarberProfile();
      // profileStore.fetchHistory();
      // profileStore.fetchNotification();
      // cartStore.fetchCart();
    }
  }
  render() {
    if (!authStore.user) this.props.navigation.navigate("Login");

    if (profileStore.loading) return <Spinner />;

    // this is the order history, will be replaced by APPOINTMENT HISTORY

    // const dataArray = [];
    // profileStore.carts.forEach(cart =>
    //   dataArray.push({
    //     title: "Order Total: " + cart.total + "KD",
    //     content: cart
    //   })
    // );

    // This will render an ACCORDION to map through the Appointment History Items

    // _renderContent = item => {
    //   let zzz = item.content.cart_items.map(cartItem => {
    //     let item = carStore.getCarById(cartItem.product);
    //     return (
    //       <ListItem thumbnail>
    //         <Left>
    //           <Thumbnail square source={{ uri: item.image }} />
    //         </Left>
    //         <Body>
    //           <Text>
    //             {item.manufacturer} {item.model} {item.year}
    //           </Text>
    //         </Body>
    //         <Right>
    //           <Button transparent onPress={() => this.handlePress(item)}>
    //             <Text>View</Text>
    //           </Button>
    //         </Right>
    //       </ListItem>
    //     );
    //   });
    //   return <List>{zzz}</List>;
    // };

    const future_appointments = profileStore.profile.future_appointments.map(
      appointment => <AppointmentCard appointment={appointment} />
    );

    const past_appointments = profileStore.profile.past_appointments.map(
      appointment => <AppointmentCard appointment={appointment} />
    );

    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Thumbnail
                bordered
                source={{ uri: profileStore.profile.image }}
              />
            </CardItem>
            <CardItem>
              <Text padder>Welcome Back {profileStore.profile.name}!</Text>
            </CardItem>
            <CardItem>
              <Text padder> Telephone: {profileStore.profile.telephone}</Text>
            </CardItem>
            <CardItem>
              <Text padder> Address: {profileStore.profile.address}</Text>
            </CardItem>
          </Card>

          <Text>{"\n"}Upcoming Appointments</Text>
          {/* <Accordion
            renderContent={_renderContent}
            dataArray={dataArray}
            style={{ marginTop: 20 }}
          /> */}
          <List>{future_appointments}</List>
          <Text>{"\n"}Past Appointments</Text>
          <List>{past_appointments}</List>
        </Content>
      </Container>
    );
  }
}
export default observer(BarberProfile);
