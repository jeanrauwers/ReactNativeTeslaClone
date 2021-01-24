import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
      <Image style={styles.menu} source={require('../../assets/images/menu.png')} />
    </View>
  );
}