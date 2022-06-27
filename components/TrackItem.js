import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Card from "../components/Card";
const TrackItem = (props) => {
  return (
    <Card style={styles.inputContainer}>
      <Text style={styles.title}>{props.title}</Text>
    </Card>
    // <View style={styles.trackItem}>
    //   <TouchableOpacity onPress={props.onSelectTrack}>
    //     <View>
    //       <View style={{ ...styles.trackRow, ...styles.trackHeader }}>
    //         <ImageBackground
    //           source={{ uri: props.image }}
    //           style={styles.bgImage}
    //         >
    //           <View style={styles.titleContainer}>
    //             <Text style={styles.title} numberOfLines={1}>
    //               {props.title}
    //             </Text>
    //           </View>
    //         </ImageBackground>
    //       </View>
    //       <View style={{ ...styles.trackRow, ...styles.trackDetail }}>
    //         <Text>{props.numOfTracks}</Text>
    //         {/* <Text>{props.complexity.toUpperCase()}</Text>
    //         <Text>{props.affordability.toUpperCase()}</Text> */}
    //       </View>
    //     </View>
    //   </TouchableOpacity>
    // </View>
  );
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
    fontFamily: "open-sans-bold",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    marginTop: 20,
  },
  trackItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    overflow: "hidden",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  trackRow: {
    flexDirection: "row",
  },
  trackHeader: {
    height: "85%",
  },
  trackDetail: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    height: "15%",
  },
  titleContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
});

export default TrackItem;
