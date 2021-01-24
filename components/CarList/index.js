import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import CartItem from '../CarItem'
import styles from './styles'

import cars from './cars'

export default function CarList() {
  return (
    <View style={styles.carContainer}>
      <FlatList data={cars} renderItem={({ item }) => <CartItem key={item.name} name={item.name} tagline={item.tagline} taglineCTA={item.taglineCTA ? item.taglineCTA : null} image={item.image} />
      }
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
}