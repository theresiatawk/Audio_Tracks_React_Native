import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Header from './components/Header';
import MainScreen from './screens/MainScreen';
import TracksNavigator from './navigation/TracksNavigator';

const fetchFonts = () => {
  return Font.loadAsync({
   'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
   'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
 });
};
export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <View style={styles.screen}>
      {/* <Header title="Audio Tracks" /> */}
      <TracksNavigator/>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
