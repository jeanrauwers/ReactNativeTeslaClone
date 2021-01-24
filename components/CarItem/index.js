import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import StyledButton from '../StyledButton'
import styles from './styles'

export default function CarItem({ image, title, subTitle, subTitleCTA }) {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>
          {subTitle}
          {' '}
          <Text style={styles.subTitleCTA}>{subTitleCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton type="primary" onPress={() => console.warn('pressed primary')} />
        <StyledButton type="secondary" content={"Existing inventory"} onPress={() => console.warn('pressed secondary')} />
      </View>
    </View>
  );
}