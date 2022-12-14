import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator 
            screenOptions={{ 
                headerShown: false
             }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
  }