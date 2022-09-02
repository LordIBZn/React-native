import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const ContacsScreen = () => {

const { sigIn, authState: { isLogeedIn } } = useContext( AuthContext)

  return (
    <View style={ styles.globalMargin } >
        <Text style={styles.title} >ContacsScreen</Text>

        {
          !isLogeedIn && <Button title='SingIn' onPress={ sigIn }/>
        } 
    </View>
  )
}
