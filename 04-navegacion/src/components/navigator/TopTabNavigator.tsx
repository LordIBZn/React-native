import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../../screens/ChatScreen';
import { ContacsScreen } from '../../screens/ContacsScreen';
import { AlbumScreen } from '../../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores, styles } from '../../theme/appTheme';

const Tab = createMaterialTopTabNavigator();


export const TopTabNavigator = () => {

const {  top:paddingTop } = useSafeAreaInsets()

    return (
    <Tab.Navigator
    style={{ paddingTop }}
    sceneContainerStyle={{
    backgroundColor: 'white' 
        }}
    screenOptions={{ 
    tabBarPressColor: colores.primary,
    tabBarShowIcon: false,
    tabBarIndicatorStyle: {
    backgroundColor: colores.primary,
    },
    tabBarStyle: {
    shadowColor:'transparent',
    elevation: 0
    }

    }} 
    >
    <Tab.Screen name="ChatScreen" component={ ChatScreen } />
    <Tab.Screen name="ContacsScreen" component={ ContacsScreen } />
    <Tab.Screen name="AlbumScreen" component={ AlbumScreen } />
    </Tab.Navigator>
    );
}