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
  TouchableOpacity,
  TextInput
} from "react-native";

import styles from "../styles/index";

import appointments from "../database/appointments";

import Icon from "react-native-vector-icons/FontAwesome";

export default class SearchByAppointment extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Search",
    headerTitleStyle: {
      paddingLeft: 50
    }
  });

  state = {
    modalVisible: false
  };

  componentDidMount() {
    let g = [];
    let index =  0;
    let f = Object.keys(appointments).reduce((accumulator, currentValue) => {
      for (obj of appointments[currentValue]) {
        g.push({...obj, index});
        index++;
      }
      return g;
    }, []);

    this.setState({
      appointments: f,
      searchResults: []
    });
  }

  render() {
    const { navigation } = this.props;

    return (
      <View>
        <View style={styles.inputTextView}>
          <TextInput
            style={styles.inputText}
            onChangeText={(text) => this.searchContacts(text)}
            placeholder = "Search Contacts"
          />
        </View>
        {(this.state.searchResults === undefined ||(this.state.searchResults.length) === 0 )  && 
        <View style={styles.noSearchResults} >
          <Text style={styles.noSearchResultsText}>No Results Found !!!</Text>
        </View>}
        <FlatList
          data={this.state.searchResults}
          renderItem={this.renderItem}
          keyExtractor={item => item.index.toString()}
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
  };

  searchContacts(searchText){
    let searchText1 = searchText.toLowerCase();
    let search;
    if (searchText1 === ""){
      search = [];
    } else {
      search = this.state.appointments.filter((value) => {
        if(value.name.toLowerCase().match(searchText1) )
        return value;
      });
    }
    this.setState({
      searchResults: search
    });
  }

}
