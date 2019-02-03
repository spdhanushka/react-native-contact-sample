import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Linking,
  Modal,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";

import styles from "../styles/index";

import appointments from "../database/appointments";

import Icon from "react-native-vector-icons/FontAwesome";

export default class ByAppointment extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("locationName"),
    headerTitleStyle: {
      paddingLeft: 50
    }
  });

  state = {
    modalVisible: false
  };

  render() {
    const { navigation } = this.props;
    const locationId = navigation.getParam("locationId");

    return (
      <View>
        <FlatList
          data={appointments[locationId]}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            // alert("Modal has been closed.");
          }}
          transparent={true}
        >
          <View style={styles.modalView}>
            <View style={styles.innerModalView}>
              {this.state.aName !== undefined && (
                <View style={styles.AppoinmentName}>
                  <Text style={styles.contactNameText}>{this.state.aName}</Text>
                </View>
              )}

              {this.state.contactNumbers !== undefined && (
                <View style={styles.AppoinmentNumber}>
                  {this.state.contactNumbers.map(number => {
                    return (
                      <View>
                        {number.length === 5 && (
                          <Text
                            style={styles.contactNumbersText}
                            key={number}
                          >
                            <Icon
                              name="external-link"
                              size={25}
                            >
                              {"    " + number}
                            </Icon>
                          </Text>
                        )}
                        {number.length > 5 && (<Text
                          style={styles.contactNumbersText}
                          key={number}
                          onPress={() => Linking.openURL(`tel:${number}`)}
                        >
                          <Icon
                            name="phone"
                            size={25}
                          >
                            {"    " + number}
                          </Icon>
                        </Text>
                        )}
                      </View>
                    );
                  })}
                </View>
              )}

              <Button
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
                title="close"
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  renderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.setModalVisible(true, item);
          }}
        >
          <View style={styles.contactItem}>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  setModalVisible(visible, modalData) {
    this.setState({
      modalVisible: visible
    });
    if (visible === false) {
      return;
    }
    if (modalData !== "undefined") {
      console.log("undesinsfsdkfsdkfd");
      this.setState({
        aName: modalData.name,
        contactNumbers: modalData.numbers
      });
    }
  }
}
