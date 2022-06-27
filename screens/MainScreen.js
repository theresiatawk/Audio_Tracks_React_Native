import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";

import Card from "../components/Card";

const MainScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <TouchableOpacity onPress={() => {
          props.navigation.navigate({routeName: 'TracksDetails'});
        }}>
          <Card style={styles.inputContainer}>
            <Text style={styles.title}>M4A</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card style={styles.inputContainer}>
            <Text style={styles.title}>FLAC</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card style={styles.inputContainer}>
            <Text style={styles.title}>MP3</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card style={styles.inputContainer}>
            <Text style={styles.title}>MP4</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card style={styles.inputContainer}>
            <Text style={styles.title}>WAV</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card style={styles.inputContainer}>
            <Text style={styles.title}>WMA</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card style={styles.inputContainer}>
            <Text style={styles.title}>AAC</Text>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity>
          <Card style={styles.inputContainer}>
            <Text style={styles.title}>Audio File</Text>
          </Card>
        </TouchableOpacity>
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
export default MainScreen;
