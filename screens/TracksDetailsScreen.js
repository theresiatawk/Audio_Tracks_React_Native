import React from "react";
import { View, StyleSheet, FlatList, Text, Image } from "react-native";

import { TRACKS } from "../data/TarcksData";
import Card from "../components/Card";

const TracksDetailsScreen = (props) => {
  const renderTrackItem = (itemData) => {
    let image = itemData.item.imageURL.toString();
    console.log(image);
    return (
      <View style={styles.screen}>
        <Card style={styles.inputContainer}>
          <Text style={styles.title}>{itemData.item.title}</Text>
          <Text style={styles.texting}><Text style = {styles.subTitle}> Number of Tracks: </Text> {itemData.item.nbOfTracks}</Text>
          <Text style={styles.texting}> <Text style = {styles.subTitle}>Description: </Text>{itemData.item.description}</Text>
          <View style={styles.imageContainer}>
            <Image
              source = {{uri: itemData.item.imageURL}}
              style={styles.image}
              resizeMode="container"
            />
          </View>
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
    fontSize: 22,
    marginVertical: 15,
    fontFamily: 'open-sans-bold',
  },
  texting: {
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 16,
    fontFamily: 'open-sans-bold',
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    marginTop: 20,
  },
  imageContainer: {
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "black",
    width: "80%",
    height: 150,
    overflow: 'hidden',
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default TracksDetailsScreen;
