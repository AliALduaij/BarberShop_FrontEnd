import React from "react";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import { Image } from "react-native";
import { Container, Content, Header, Body } from "native-base";
import LogoutButton from "../Components/Buttons/LogoutButton";
const customNavigator = props => (
  <Container>
    <Header style={{ height: 250 }}>
      <Body></Body>
      <LogoutButton />
    </Header>
    <Content>
      <DrawerNavigatorItems {...props} />
    </Content>
  </Container>
);

export default customNavigator;
