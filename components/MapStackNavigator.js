import React from "react";
import { createStackNavigator, createAppContainer} from "react-navigation";
import GoogleMap from './GoogleMap';

const MapStackNavigator = createStackNavigator({
  Map: {
    screen: GoogleMap,
    navigationOptions: ({ navigation }) => ({
      title: 'Map',
    }),
  },
});

export default createAppContainer(MapStackNavigator);