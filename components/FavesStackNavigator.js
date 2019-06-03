import React from "react";
import { createStackNavigator, createAppContainer} from "react-navigation";
import LinearGradient from 'react-native-linear-gradient';
import SessionDetail from './SessionDetail';
import Faves from './Faves';

const FavesStackNavigator = createStackNavigator({
  Faves: {
    screen: Faves,
    navigationOptions: ({ navigation }) => ({
      title: 'Faves',
    }),
  },
  SessionDetail: {
    screen: SessionDetail,
    navigationOptions: ({ navigation }) => ({
      title: 'Session Faves',
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

export default createAppContainer(FavesStackNavigator);