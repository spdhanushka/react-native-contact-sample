import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Index from "./src/screens/index";
import ByLocation from "./src/screens/byLocation";
import ByAppointment from "./src/screens/byAppointment";
import Search from "./src/screens/search";
import { createStackNavigator } from "react-navigation";

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: {
      screen: Index
    },
    ByLocation: {
      screen: ByLocation
    },
    ByAppointment: {
      screen: ByAppointment
    },
    Search: {
      screen: Search
    }
  },
  {
    initialRouteName: 'Home',
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DDD"
  }
});
