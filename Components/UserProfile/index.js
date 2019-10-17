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

import { Image, View } from "react-native";

// Stores
import authStore from "../../Stores/authStore";
import profileStore from "../../Stores/profileStore";
// import cartStore from "../../stores/cartStore";

//Components
import AppointmentCard from "./AppointmentCard";
import ServiceCard from "./ServiceCard";

//Buttons
// import NotificationButton from "../Buttons/NotificationButton";
import styles from "../BarberList/style";
import CreatAppointment from "../BarberProfile/CreateAppointment";

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
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Icon
                  name="account-details"
                  type="MaterialCommunityIcons"
                  onPress={() =>
                    this.props.navigation.navigate("EditUserProfile")
                  }
                />
              </Left>
              <Right>
                <Icon
                  name="coins"
                  type="FontAwesome5"
                  color="black"
                  onPress={() =>
                    this.props.navigation.navigate("EditUserProfile")
                  }
                />
              </Right>
              <Right>
                <Text
                  style={{
                    color: "green",
                    fontSize: 12,
                    marginLeft: null,
                    paddingLeft: null
                  }}
                >
                  {profileStore.profile.credit}
                </Text>
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{ uri: profileStore.profile.image }}
                style={{ height: 400, width: null, flex: 1 }}
              />
            </CardItem>
            <CardItem>
              {/* <Left>
                <Icon
                  color="black"
                  name="calendar-plus"
                  type="MaterialCommunityIcons"
                  onPress={() =>
                    this.props.navigation.navigate("CreateAppointment")
                  }
                />
              </Left> */}
              <CreatAppointment />
              <Right>
                <Icon
                  name="flag"
                  type="MaterialCommunityIcons"
                  color="black"
                  onPress={() =>
                    this.props.navigation.navigate("EditUserProfile")
                  }
                />
              </Right>
            </CardItem>
          </Card>
          <Card>
            <Body>
              <CardItem>
                <Text style={styles.text}>
                  Welcome Back {profileStore.profile.name}!
                </Text>
              </CardItem>
            </Body>
            <CardItem>
              <Text style={styles.textBody}>
                {" "}
                Telephone: {profileStore.profile.telephone}
              </Text>
            </CardItem>

            {profileStore.profile.is_barber ? (
              <>
                <CardItem>
                  <Text style={styles.textBody}>
                    Nationality: {profileStore.profile.nationality}
                  </Text>
                </CardItem>
                <CardItem>
                  <Text style={styles.textBody}>
                    {" "}
                    Experience: {profileStore.profile.experience}
                  </Text>
                </CardItem>
              </>
            ) : (
              <CardItem>
                <Text style={styles.textBody}>
                  {" "}
                  Address: {profileStore.profile.address}
                </Text>
              </CardItem>
            )}

            <CardItem>
              <Text style={styles.textBody}>
                {" "}
                Credit: {profileStore.profile.credit}
              </Text>
            </CardItem>
          </Card>
          {profileStore.profile.is_barber && (
            <>
              <Text style={styles.textBody}> Services:</Text>
              {my_services}
            </>
          )}

          <Text style={styles.textBody}>{"\n"}Upcoming Appointments</Text>
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
