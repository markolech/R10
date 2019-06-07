import React from 'react'
import { createStackNavigator, createAppContainer} from "react-navigation";
import About from './About';
import LinearGradient from 'react-native-linear-gradient';

const AboutStackNavigator = createStackNavigator(
  {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => ({
      title: 'About',
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

export default createAppContainer(AboutStackNavigator);