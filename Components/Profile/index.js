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
import profileStore from "../../Stores/profileStore";
// import cartStore from "../../stores/cartStore";

//Buttons
// import NotificationButton from "../Buttons/NotificationButton";

class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Profile Page",
    headerLeft: null
    // headerRight: <NotificationButton />
  });

  handlePress = item => {
    this.props.navigation.navigate("CarDetail", {
      item: item
    });
  };
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

    if (authStore.loading) return <Spinner />;

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
    return (
      <Container>
        <Content padder>
          <Text>Welcome! {profileStore.profile.first_name}</Text>
          <Text>{"\n"}Order History</Text>
          {/* <Accordion
            renderContent={_renderContent}
            dataArray={dataArray}
            style={{ marginTop: 20 }}
          /> */}
        </Content>
      </Container>
    );
  }
}
export default observer(Profile);
