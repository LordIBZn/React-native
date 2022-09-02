import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform, Text } from "react-native";
import { Tab1Screen } from "../../screens/Tab1Screen";
// import { Tab3Screen } from "../../screens/Tab3Screen";
import { Tab2Screen } from "../../screens/Tab2Screen";
import { StackNavigation } from './StackNavigator';
import { colores, styles } from '../../theme/appTheme';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from "./TopTabNavigator";
import  Icon  from 'react-native-vector-icons/Ionicons';





export const Tabs =() => {
  return Platform.OS === 'ios'
  ? <TabsIOS />
  : <TabsAndorid />
}



const BottonTabsAndorid = createMaterialBottomTabNavigator();

const TabsAndorid = () => {
  return (
    <BottonTabsAndorid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{ backgroundColor: colores.primary }}
      screenOptions={({ route})=> ({
        tabBarIcon: ({color, focused}) => {
        let iconName: string = '';
        switch (route.name) {
          case 'Tab1Screen':
            iconName = 'bandage-outline'
            break;

            case 'Tab2Screen':
              iconName = 'basketball-outline'
            break;

            case 'StackNavigation':
              iconName = 'bookmarks-outline'
              break;
        }
          return <Icon name={iconName} size={22} color={color} />
        }
      })}
    >
      <BottonTabsAndorid.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen } />
      <BottonTabsAndorid.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={ TopTabNavigator } />
      <BottonTabsAndorid.Screen name="StackNavigation" options={{ title: 'Stack' }} component={ StackNavigation } />
    </BottonTabsAndorid.Navigator>
  );
}



const BottonTabIOS = createBottomTabNavigator();

 const TabsIOS = () => {
  return (
    <BottonTabIOS.Navigator
    sceneContainerStyle={{ 
    backgroundColor: 'white'
    }}
    screenOptions={{  
      tabBarStyle: {
      borderTopColor: colores.primary,
      borderTopWidth: 0,
      elevation: 0,
      },
      tabBarLabelStyle: {
        fontSize: 15
      }
    }}
    >
      {/* <Tab.Screen name="Tab1Screen" options={{ title: 'Tab1', tabBarIcon:(props) => <Text style={{ color: props.color }} >T1</Text> }} component={ Tab1Screen } /> */}
      <BottonTabIOS.Screen 
      name="Tab1Screen"
      component={ Tab1Screen } 
      options={{ title: 'Tab1', 
      }}  />
      <BottonTabIOS.Screen name="Tab1Screen" options={{ title: 'Tab1' }} component={ Tab1Screen } />
      <BottonTabIOS.Screen name="Tab2Screen" options={{ title: 'Tab2' }} component={ TopTabNavigator } />
      <BottonTabIOS.Screen name="StackNavigation" options={{ title: 'Stack' }} component={ StackNavigation } />
    </BottonTabIOS.Navigator>
  );
}