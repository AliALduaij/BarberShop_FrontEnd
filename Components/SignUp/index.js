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
  Header
} from "native-base";

// Store
import authStore from "../../Stores/authStore";

class Login extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: ""
  };
  render() {
    const { navigation } = this.props;
    if (authStore.user) navigation.navigate("Home");
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
                <Body>
                  <Label style={{ color: "black" }}>First Name</Label>
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
                    onChangeText={first_name => this.setState({ first_name })}
                  />
                </Item>
                <Body>
                  <Label style={{ color: "black" }}>Last Name</Label>
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
                    onChangeText={last_name => this.setState({ last_name })}
                  />
                </Item>
              </Form>
            </Body>
          </ListItem>
          <Button
            full
            warning
            onPress={() => authStore.signup(this.state, navigation)}
          >
            <Text>Register</Text>
          </Button>
          <Text
            style={{ color: "blue", textAlign: "center" }}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            If you already have an account, click here to login{" "}
          </Text>
        </List>
        <Body>
          <Label style={{ color: "red", opacity: 0.6 }} />
        </Body>
      </Content>
    );
  }
}

export default Login;
