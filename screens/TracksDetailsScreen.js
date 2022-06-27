import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";

import Card from "../components/Card";

const TracksDetailsScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    marginTop: 20,
  },
});
export default TracksDetailsScreen;
