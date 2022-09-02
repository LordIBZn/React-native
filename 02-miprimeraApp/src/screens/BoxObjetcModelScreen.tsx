import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjetcModelScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={ styles.title }>Box Objetc Model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
    },
    title: {
      fontSize: 20,
      // width: 150,
      // backgroundColor: 'red',
    }
});

