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
import profileStore from "../../Stores/profileStore";

class EditUserProfile extends Component {
  state = {
    telephone: "",
    address: ""
  };
  render() {
    const { navigation } = this.props;
    // if (profileStore.user) navigation.navigate("Home");
    return (
      <Content>
        <Header transparent />
        <List>
          <ListItem style={{ borderBottomWidth: 0 }}>
            <Body>
              <Form>
                <Body>
                  <Label style={{ color: "black" }}>Telephone</Label>
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
                    onChangeText={telephone => this.setState({ telephone })}
                  />
                </Item>

                {profileStore.profile.is_barber ? (
                  <>
                    <Body>
                      <Label style={{ color: "black" }}>Nationality</Label>
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
                        onChangeText={nationality =>
                          this.setState({ nationality })
                        }
                      />
                    </Item>
                    <Body>
                      <Label style={{ color: "black" }}>Experience</Label>
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
                        onChangeText={experience =>
                          this.setState({ experience })
                        }
                      />
                    </Item>
                  </>
                ) : (
                  <>
                    <Body>
                      <Label style={{ color: "black" }}>Address</Label>
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
                        onChangeText={address => this.setState({ address })}
                      />
                    </Item>
                  </>
                )}
              </Form>
            </Body>
          </ListItem>
          <Button
            full
            danger
            onPress={() =>
              profileStore.updateUserProfile(this.state, navigation)
            }
          >
            <Text>Update profile</Text>
          </Button>
          <Text
            style={{ color: "blue", textAlign: "center" }}
            onPress={() => this.props.navigation.navigate("Profile")}
          >
            Go back to your profile here{" "}
          </Text>
        </List>
        <Body>
          <Label style={{ color: "red", opacity: 0.6 }} />
        </Body>
      </Content>
    );
  }
}

export default EditUserProfile;
