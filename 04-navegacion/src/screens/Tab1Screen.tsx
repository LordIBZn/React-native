import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';


export const Tab1Screen = () => {

  const { top } = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen effect');
  }, [])
  

  return (
    <View style={{ 
      ...styles.globalMargin,
      marginTop: top + 20
      }}>
        <Text style={ styles.title }> Tab1Screen </Text>
        <Text>
        <TouchableIcon iconName="airplane-outline"  />
        <TouchableIcon iconName="car-sport-sharp"  />
        <TouchableIcon iconName="game-controller"  />
        
        </Text>
    </View>
  )
}
