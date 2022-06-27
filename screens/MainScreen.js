import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

import Card from "../components/Card";
import { TRACKS } from "../data/TarcksData"; 

const MainScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <View style={styles.screen}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate({
              routeName: "TracksDetails",
              params: {
                trackId: itemData.item.id,
              },
            });
          }}
        >
          <Card style={styles.inputContainer}>
            <Text style={styles.title}>{itemData.item.title}</Text>
          </Card>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <FlatList
      numColumns={2}
      keyExtractor={(item, index) => item.id}
      data={TRACKS}
      renderItem={renderGridItem}
    />
  );
};

MainScreen.navigationOptions = {
  headerTitle: "Audio Tracks",
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    margin: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'open-sans-bold',
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    marginTop: 20,
  },
});
export default MainScreen;
