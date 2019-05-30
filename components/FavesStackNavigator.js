import React from "react";
import { createStackNavigator, createAppContainer} from "react-navigation";
import Faves from './Faves';

const FavesStackNavigator = createStackNavigator({
  Faves: {
    screen: Faves,
    navigationOptions: ({ navigation }) => ({
      title: 'Faves',
    }),
  },
});

export default createAppContainer(FavesStackNavigator);