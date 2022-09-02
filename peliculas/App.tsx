import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { Navigation } from './src/navigation/Navigation';
// import { Text } from 'react-native';
import { FadeScreen } from './src/screens/FadeScreen';
import { GradientProvider } from './src/context/GradientContext';

const AppState = ({ children }: any) => {
  return(
    <GradientProvider>
      { children }
    </GradientProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
      {/* <FadeScreen /> */}
    </NavigationContainer>
  );
}

export default App;