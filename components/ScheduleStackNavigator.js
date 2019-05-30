import React from "react";
import { createStackNavigator, createAppContainer} from "react-navigation";
import Schedule from './Schedule';
import SessionDetail from './SessionDetail';

const ScheduleStackNavigator = createStackNavigator({
  Schedule: {
    screen: Schedule,
    navigationOptions: ({ navigation }) => ({
      title: 'Schedule',
      headerBackTitle: null
    }),
  },
  SessionDetail: {
    screen: SessionDetail,
    navigationOptions: ({ navigation }) => ({
      title: 'Session',
    }),
  },
});

export default createAppContainer(ScheduleStackNavigator);