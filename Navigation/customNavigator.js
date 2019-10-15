import React from "react";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import { Image, Text } from "react-native";
import { Button } from "native-base";
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
      <Button></Button>
    </Content>
  </Container>
);

export default customNavigator;
