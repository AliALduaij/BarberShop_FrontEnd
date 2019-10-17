import React from "react";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import { Image, Text } from "react-native";
import { Button } from "native-base";
import { Container, Content, Header, Body } from "native-base";
import LogoutButton from "../Components/Buttons/LogoutButton";
import authStore from "../Stores/authStore";
const customNavigator = props => (
  <Container>
    <Header style={{ height: 250 }}>
      <Body></Body>
    </Header>
    <Content>
      <DrawerNavigatorItems {...props} />
      {authStore.user ? <LogoutButton /> : null}
    </Content>
  </Container>
);

export default customNavigator;
