import React from 'react';
// import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MenuLateral } from './src/components/navigator/MenuLateral';
import { Tabs } from './src/components/navigator/Tabs';
import { AuthProvider } from './src/context/AuthContext';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { StackNavigation } from './src/components/navigator/StackNavigator';
// import { MenuLateralBasico } from './src/components/navigator/MenuLateralBasico';


const App = () => {
  return (
    <NavigationContainer>
      <AppState>
      {/* <StackNavigation /> */}
      {/* <MenuLateralBasico /> */}
      <MenuLateral />
      {/* <Tabs /> */}
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ( {children}: any ) => {
  return(
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

 export default App;