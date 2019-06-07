import React from "react";
import { createStackNavigator, createAppContainer} from "react-navigation";
import Schedule from './Schedule';
import SessionDetail from './SessionDetail';
import LinearGradient from 'react-native-linear-gradient';

const ScheduleStackNavigator = createStackNavigator(
  {
    Schedule: {
    screen: Schedule,
    navigationOptions: ({ navigation }) => (
      {
      title: 'Schedule',
      headerBackTitle: null,
      }),  
    },
    SessionDetail: {
      screen: SessionDetail,
      navigationOptions: ({ navigation }) => ({
        title: 'Session',
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

export default createAppContainer(ScheduleStackNavigator);