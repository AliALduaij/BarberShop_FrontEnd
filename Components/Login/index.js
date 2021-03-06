import React, { Component } from "react";

// NativeBase Components
import {
  Text,
  Button,
  Body,
  List,
  ListItem,
  Form,
  Label,
  Input,
  Item,
  Content,
  Header,
  Section,
  CheckBox
} from "native-base";

// Store
import authStore from "../../Stores/authStore";
import { observer } from "mobx-react";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    const { navigation } = this.props;
    // if (!authStore.user) navigation.navigate("login");
    return (
      <Content>
        <Header transparent />
        <List>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Body>
              <Form>
                <Body>
                  <Label style={{ color: "black" }}>Username</Label>
                </Body>
                <Item
                  rounded
                  style={{
                    backgroundColor: "white",
                    marginTop: 10,
                    marginBottom: 10
                  }}
                >
                  <Input
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={username => this.setState({ username })}
                  />
                </Item>
                <Body>
                  <Label style={{ color: "black" }}>Password</Label>
                </Body>
                <Item
                  rounded
                  style={{ backgroundColor: "white", marginTop: 10 }}
                >
                  <Input
                    autoCorrect={false}
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={password => this.setState({ password })}
                  />
                </Item>
              </Form>
            </Body>
          </ListItem>
          <Button
            full
            success
            onPress={() => authStore.login(this.state, navigation)}
          >
            <Text>Login</Text>
          </Button>
          <Text
            style={{ color: "blue", textAlign: "center" }}
            onPress={() => this.props.navigation.navigate("SignUp")}
          >
            Register a new account here{" "}
          </Text>
        </List>
        <Body>
          <Label style={{ color: "red", opacity: 0.6 }} />
        </Body>
      </Content>
    );
  }
}

export default observer(Login);
