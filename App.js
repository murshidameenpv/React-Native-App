import React from 'react';
import {SafeAreaView, StyleSheet, Text, Image} from 'react-native';
import SignInScreen from './src/screens/SignInScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor:'#F9FBFB'
  },
});

export default App;
