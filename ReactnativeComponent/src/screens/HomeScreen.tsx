import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons'
import { FlatListItem } from '../components/FlatListItem';
import { MenuItem } from '../interfaces/Appinterfaces';
import { styles } from '../theme/appTheme';



const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    components: 'Animation101Screen'
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    components: 'Animation102Screen'
  },
  
]


export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();

  const renderMenuItem = ( menuItem : MenuItem ) => {
    
  }

  const renderListHeader = () => {
    return (
      <View style={{ marginTop: top + 20, marginBottom: 20 }} >
        <Text style={ styles.title }>Opciones de menu</Text>
      </View>
    )
  }

  const itemSeparator = () => {
    return (
      <View
        style={{ 
          borderWidth: 1,
          opacity: 0.4,
          marginVertical: 8
        }}
      />
    );
  }
  

  return (
    <View style={{ flex: 1, ...styles.globlalMargin }}>

        <FlatList 
        data={ menuItems }
        renderItem ={ ({ item }) => <FlatListItem menuItem={ item } /> }
        keyExtractor={(item) => item.name }
        ListHeaderComponent={ renderListHeader }
        ItemSeparatorComponent={ itemSeparator }
        />

    </View>
  )
}
