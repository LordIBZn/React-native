import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { styles } from '../theme/appTheme';

interface Props extends DrawerScreenProps<any,any>{};

export const Pagina1Screen = ( { navigation }: Props ) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <Button 
      title='menu'
      onPress={ () => navigation.toggleDrawer()}
      />
    })
  }, [])
  
  
  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }> Pagina1Screen</Text>
        
        <Button
          title='Ir  a paguina 2'
          onPress={ () => navigation.navigate('pagina2screen')}
        />

        <Text style={{ 
          marginVertical: 20,
          fontSize: 20,
          marginLeft: 5
        }} >
          Navegar con argumentos </Text>

        <View style= {{ flexDirection: 'row' }}>
          <TouchableOpacity
          style={{ 
            ...styles.botonGrande, 
            backgroundColor: '#5856D6'
          }}
          onPress={ () => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'pedro'
          }) }
          >
            <Text style={ styles.botonGrandeTexto }>Pedro</Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={{ 
            ...styles.botonGrande, 
            backgroundColor: '#FF9427'
          }}
          onPress={ () => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'maria'
          }) }
          >
            <Text style={ styles.botonGrandeTexto } >maria</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}
