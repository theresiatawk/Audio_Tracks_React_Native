import React from "react";
import { View, StyleSheet, FlatList, Text, Image } from "react-native";

import { TRACKS } from "../data/TarcksData";
import Card from "../components/Card";

const TracksDetailsScreen = (props) => {
  const renderTrackItem = (itemData) => {
    return (
      <View style={styles.screen}>
        <Card style={styles.inputContainer}>
          <Text style={styles.title}>{itemData.item.title}</Text>
          <Text>Number Of Tracks: {itemData.item.nbOfTracks}</Text>
          <Text>Description: {itemData.item.description}</Text>
          <Image source = {require('..assets/M4A.jpg')}/>
        </Card>
      </View>
    );
  };
  const trackId = props.navigation.getParam("trackId");
  const displayedTrack = TRACKS.filter(
    (track) => track.id.indexOf(trackId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedTrack}
        renderItem={renderTrackItem}
        KeyExtractor={(item, index) => item.id}
        style={{ width: "100%" }}
      />
    </View>
  );
};

TracksDetailsScreen.navigationOptions = (navigationData) => {
  const trackId = navigationData.navigation.getParam("trackId");
  const selectedTrack = TRACKS.find((track) => track.id === trackId);
  return {
    headerTitle: selectedTrack.title,
  };
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
