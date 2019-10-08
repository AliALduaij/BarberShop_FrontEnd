// import moment from "moment";

// import React, { Component } from "react";
// import { Text, View, StyleSheet } from "react-native";

// import { Icon, Button } from "native-base";
// import Modal from "react-native-modal";
// import { observer } from "mobx-react";
// import addServicesStore from "../../Stores/AddServicesStore";

// // let time=moment(Date(appointment.date_and_time)).format("h:mm:ss")

// const barberID = this.props.navigation.getParam("barberID");
// const barber = barberStore.barbers.find(barbers => barbers.user === barberID);

// class Time extends Component {
//   render() {
//     // let time=moment(Date(appointment.date_and_time)).format("h:mm:ss")

//     const barberID = this.props;
//     const barber = barberStore.barbers.find(
//       barbers => barbers.user === barberID
//     );
//     return (
//       <View style={{ flex: 1 }}>
//         <Modal isVisible={this.state.isModalVisible} animationType="fade">
//           <View style={{ flex: 1 }}>
//             {/* here i will put time slots */}
//             <Button style={styles.Button1} bordered light>
//               <Text style={styles.Text1}>Confirm</Text>
//             </Button>
//             <Button
//               style={styles.Button2}
//               bordered
//               light
//               onPress={addServicesStore.toggleModal}
//             >
//               <Text style={styles.Text2}>Cancel</Text>
//             </Button>
//           </View>
//         </Modal>
//       </View>
//     );
//   }
// }

// export default observer(Time);
// const styles = StyleSheet.create({
//   Text1: {
//     color: "white",
//     textAlign: "center",
//     paddingLeft: 19
//   },
//   Text2: {
//     color: "white",
//     textAlign: "center",
//     paddingLeft: 27
//   },
//   Button1: {
//     height: 50,
//     width: 110,
//     position: "absolute",
//     bottom: 30,
//     left: 30
//   },
//   Button2: {
//     height: 50,
//     width: 110,
//     position: "absolute",
//     bottom: 30,
//     right: 30
//   }
// });
