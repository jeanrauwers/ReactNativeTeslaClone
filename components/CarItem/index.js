import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton'
import styles from './styles'

export default function CarItem({ image, name, tagline, taglineCTA }) {
  console.log(tagline)
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline}
          {' '}
          <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton type="primary" onPress={() => console.warn('pressed primary')} />
        <StyledButton type="secondary" content={"Existing inventory"} onPress={() => console.warn('pressed secondary')} />
      </View>
    </View>
  );
}