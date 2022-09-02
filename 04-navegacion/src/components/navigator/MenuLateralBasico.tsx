import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreen } from '../../screens/SettingsScreen';
import { StackNavigation } from './StackNavigator';
import { useWindowDimensions } from 'react-native';


const Drawer = createDrawerNavigator();

 export const MenuLateralBasico = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
    screenOptions={{ 
      drawerType: width >= 768 ? 'permanent' : 'front'
     }}
    >
      <Drawer.Screen name="StackNavigator" options={{ title: 'home' }} component={StackNavigation} />
      <Drawer.Screen name="SettingsScreen" options={{ title: 'settings' }} component={SettingsScreen} />
    </Drawer.Navigator>
  );
}