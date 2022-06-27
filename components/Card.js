import React from 'react';
import { View, StyleSheet } from 'react-native';
import { enableScreens } from 'react-native-screens';

enableScreens();

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding:40,
    borderRadius: 10,
  }
});
export default Card;
