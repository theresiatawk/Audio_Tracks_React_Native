import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
} from "react-native";

import { TRACKS } from "../data/TarcksData";

const TracksDetailsScreen = (props) => {
  const trackId = props.navigation.getParam('trackId');
  const selectedTrack = TRACKS.find(track => track.id === trackId);

  return (
    <ScrollView>
      <View style={styles.screen}>
      </View>
    </ScrollView>
  );
};

TracksDetailsScreen.navigationOptions = navigationData => {
  const trackId = navigationData.navigation.getParam('trackId');
  const selectedTrack = TRACKS.find(track => track.id === trackId);

  return {
    headerTitle: selectedTrack.title
  };

}
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
