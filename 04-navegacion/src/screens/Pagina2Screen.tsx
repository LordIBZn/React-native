import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends NativeStackScreenProps<any,any>{};

export const Pagina2Screen = ( { navigation }: Props ) => {

  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }>Pagina2Screen</Text>

        <Button 
          title='ir a paguina 3'
          onPress={ () => navigation.navigate('Pagina3Screen') }
        />


    </View>
  )
}
