import React from "react";
import { createStackNavigator, createAppContainer} from "react-navigation";
import GoogleMap from './GoogleMap';
import LinearGradient from 'react-native-linear-gradient';


const MapStackNavigator = createStackNavigator({
  Map: {
    screen: GoogleMap,
    navigationOptions: ({ navigation }) => ({
      title: 'Map',
    }),
  },
},
{
  defaultNavigationOptions: {
    headerStyle: {
      color: '#fff',
      backgroundColor: 'transparent'
    },
    headerBackground: (
      <LinearGradient 
        colors={['#C5414D','#9963E9']}
        style={{ flex: 1}}
        start={{ x:0, y:0 }}
        end={{ x:2, y:1}}
      />
    ),
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }
}
);

export default createAppContainer(MapStackNavigator);