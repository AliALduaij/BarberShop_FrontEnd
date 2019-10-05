// import React, { Component } from "react";
// import { observer } from "mobx-react";
// import { withNavigation } from "react-navigation";

// // NativeBase Components
// import {
//   Thumbnail,
//   Text,
//   Button,
//   Left,
//   Body,
//   Right,
//   List,
//   ListItem,
//   Picker,
//   Content
// } from "native-base";

// // Style
// // import styles from "./styles";

// //Store
// import banakStore from "../../Stores/BarberStore"
// // Components

// class BanakDetail extends Component {
//   state = {};

//   //   static navigationOptions = ({ navigation }) => ({
//   //     title: navigation.getParam("BanakID", {}).name
//   //     //     headerRight: <CartButton />
//   //   });
//   // const Banak = this.props.navigation.getParam("BanakID", {});
//   render() {
//     // const Banak =

//     const BanakID = this.props.navigation.getParam("banakID");
//     const Banak = banakStore.banaks.find(Banaks => Banaks.id === BanakID);

//     return (
//       <Content>
//         <BanakModal />
//         <List>
//           <ListItem>
//             <Left>
//               <Text>
//                 {Banak.name + "\n"}
//                 <Text>{Banak.description}</Text>
//               </Text>
//             </Left>
//             <Body />
//             <Right>
//               <Thumbnail bordered source={{ uri: Banak.image }} />
//             </Right>
//           </ListItem>
//           <ListItem></ListItem>
//           <Button
//             full
//             danger
//             onPress={() => cartStore.addItemToCart((item = Banak))}
//           >
//             <Text>Add</Text>
//           </Button>
//         </List>
//       </Content>
//     );
//   }
// }

// export default withNavigation(observer(BanakDetail));
