//You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import About from './About';
import Faves from './Faves';
import Schedule from './Schedule';
import GoogleMap from './GoogleMap';
import ScheduleStackNavigator from './ScheduleStackNavigator';

const CreateBottomTabNavigator = createBottomTabNavigator(
  {
    Schedule: { screen: ScheduleStackNavigator },
    Map: GoogleMap,
    Faves: Faves,
    About: About,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'About') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
          //IconComponent = HomeIconWithBadge; 
        } else if (routeName === 'Faves') {
          iconName = `ios-heart`;
        } else if (routeName === 'Schedule') {
          iconName = `ios-calendar`;
        } else if (routeName === 'Map'){
          iconName = `ios-map`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      style: { backgroundColor: 'black' }
    },
  }
);

export default CreateBottomTabNavigator;