import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  Platform,
  FlatList,
} from "react-native";

import Card from "../components/Card";
import Colors from "../constants/Colors";
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
export default MainScreen;
