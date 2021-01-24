import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarItem from './components/CarItem'

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem title="Model S" subTitle={"Starting at $68,400"} subTitleCTA={'testing bla bla bla'} image={require('./assets/images/ModelS.jpeg')} />
      < StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
