import React from "react";
import { createStackNavigator, createAppContainer} from "react-navigation";
import Schedule from './Schedule';
import SessionDetail from './SessionDetail'

const ScheduleStackNavigator = createStackNavigator({
  Schedule: {
    screen: Schedule
  },
  SessionDetail: SessionDetail
});

export default createAppContainer(ScheduleStackNavigator);