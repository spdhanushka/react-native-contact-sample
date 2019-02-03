import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity
} from "react-native";

import styles from "../styles/index";

import locations from "../database/locations";
import camps from "../database/camps";

import Icon from "react-native-vector-icons/FontAwesome";

export default class ByLocation extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("campName"),
    headerTitleStyle: {
      paddingLeft: 50
    }
  });
  render() {
    const { navigation } = this.props;
    const campId = navigation.getParam("campId");
    return (
      <FlatList
        data={locations[campId]}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
    );
  }

  renderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("ByAppointment", {
              locationId: item.id,
              locationName: item.name
            })
          }
        >
          <View style={styles.contactItem}>
            <View style={styles.avatar}>
              <Icon
                name="users"
                size={30}
              />
            </View>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
}

