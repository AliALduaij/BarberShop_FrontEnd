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
  Icon,
  List,
  ListItem,
  Left,
  Thumbnail,
  Body,
  Right
} from "native-base";

// Stores
import authStore from "../../Stores/authStore";
import profileStore from "../../Stores/profileStore";
// import cartStore from "../../stores/cartStore";

//Components
import AppointmentCard from "./AppointmentCard";
import ServiceCard from "./ServiceCard";

//Buttons
// import NotificationButton from "../Buttons/NotificationButton";

class Profile extends Component {
  // static navigationOptions = ({ navigation }) => ({
  // title: "Profile Page",
  // headerLeft: null
  // headerRight: <NotificationButton />
  // });

  // handlePress = item => {
  //   this.props.navigation.navigate("CarDetail", {
  //     item: item
  //   });
  // };
  componentDidMount() {
    if (authStore.user) {
      profileStore.fetchProfile();
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

    let my_services = [];
    if (profileStore.profile.is_barber)
      my_services = profileStore.profile.services.map(service => (
        <ServiceCard service={service} />
      ));

    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Thumbnail
                bordered
                source={{ uri: profileStore.profile.image }}
              />
              <Right>
                <Icon
                  name="account-details"
                  type="MaterialCommunityIcons"
                  onPress={() =>
                    this.props.navigation.navigate("EditUserProfile")
                  }
                />
              </Right>
            </CardItem>
            <CardItem>
              <Text padder>Welcome Back {profileStore.profile.name}!</Text>
            </CardItem>
            <CardItem>
              <Text padder> Telephone: {profileStore.profile.telephone}</Text>
            </CardItem>

            {profileStore.profile.is_barber ? (
              <>
                <CardItem>
                  <Text padder>
                    Nationality: {profileStore.profile.nationality}
                  </Text>
                </CardItem>
                <CardItem>
                  <Text padder>
                    {" "}
                    Experience: {profileStore.profile.experience}
                  </Text>
                </CardItem>
              </>
            ) : (
              <CardItem>
                <Text padder> Address: {profileStore.profile.address}</Text>
              </CardItem>
            )}

            <CardItem>
              <Text padder> Credit: {profileStore.profile.credit}</Text>
            </CardItem>
          </Card>
          {profileStore.profile.is_barber && (
            <>
              <Text padder> Services:</Text>
              {my_services}
            </>
          )}

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
export default observer(Profile);
