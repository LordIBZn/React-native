import React from 'react'
import { StyleSheet, View } from 'react-native';

export const TareaScreen = () => {
  return (
    <View style={ styles.cointainer }>
        <View style={ styles.cajaMorada } />
        <View style={ styles.cajaNaranja } />
        <View style={ styles.cajaAzul } />
    </View>
  )
}

const styles = StyleSheet.create({
    cointainer: {
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cajaMorada: {
        height: 100,
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        
    },
    cajaNaranja: {
        height: 100,
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        top: 50
        
    },
    cajaAzul: {
        height: 100,
        width: 100,
        borderWidth: 10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
    },
});