import React from "react";
import { DrawerNavigatorItems } from "react-navigation-drawer";
import { Image } from "react-native";
import { Container, Content, Header, Body } from "native-base";
const customNavigator = props => (
  <Container>
    <Header style={{ height: 250 }}>
      <Body></Body>
    </Header>
    <Content>
      <DrawerNavigatorItems {...props} />
    </Content>
  </Container>
);

export default customNavigator;
