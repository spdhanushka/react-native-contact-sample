import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  Image
} from "react-native";

import styles from "../styles/index";

import camps from "../database/camps";

import Icon from "react-native-vector-icons/FontAwesome";

export default class Index extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
    // title: "SLAF Telephone Directory 2019 – Jan",
    headerTitle: (<View style = {{alignSelf: "stretch"}} >
              <Text style = {{textAlign:"center", fontWeight: '700', fontSize: 18 }} >
                Telephone Directory 
              </Text>
              <Text  style = {{textAlign:"center", fontWeight: '700', fontSize: 15}}>
                2018 – Jan
              </Text>
            </View>),
    titleStyle: { paddingLeft: 10 },
    headerRight: (
      <TouchableOpacity
        onPress={() => navigation.navigate("Search")}
        title="Search"
        style={styles.searchIcon}
      >
        <Icon
          name="search"
          size={30}
        /> 
      </TouchableOpacity>
    ),
    };
  };
  render() {
    return (
      <FlatList
        data={camps.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      />
    );
  }

  renderItem = ({ item }) => {
    return (
      <View style={ [backgroundColor = '#AED6F1'] }>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("ByLocation", {
              campId: item.id,
              campName: item.name
            })
          }
        >
          <View style={styles.contactItem}>
            <View style={styles.avatar}>
              <Image
                style={styles.avatarImage}
                source={require("../images/index.png")}
              />
            </View>
            <Text style={styles.name}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
}

