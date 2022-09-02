import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../../theme/appTheme';
import { Tabs } from './Tabs';


const Drawer = createDrawerNavigator();



 export const MenuLateral = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
    screenOptions={{ 
      drawerType: width >= 768 ? 'permanent' : 'front'
     }}
    drawerContent={(props) => <MenuInterno { ...props } />}
    >
      <Drawer.Screen name="Tabs" component={ Tabs } />
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( {navigation}:DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={ styles.avatarContainer }>
        <Image
          source={{ 
            uri: 'https://thumbs.dreamstime.com/b/ejemplo-creativo-del-vector-placeholder-perfil-avatar-defecto-aislado-en-fondo-plantilla-gris-mes-espacio-blanco-de-la-foto-118823351.jpg'
          }} 
          style={ styles.avatar }
        />
      </View>
      
      {/* opciones de menu */}
      <View style={ styles.menuContainer} >
          <TouchableOpacity style={ styles.menuBoton } 
          onPress={ () => navigation.navigate('Tabs') }
          >
            <Text style={ styles.menuTexto } >Navegacion</Text>
          </TouchableOpacity>

          <TouchableOpacity style={ styles.menuBoton} 
          onPress={ () => navigation.navigate('SettingsScreen') }
          >
            <Text style={ styles.menuTexto } >Ajustes</Text>
          </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  );
}