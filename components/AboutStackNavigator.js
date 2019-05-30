import { createStackNavigator, createAppContainer} from "react-navigation";
import About from './About';

const AboutStackNavigator = createStackNavigator({
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => ({
      title: 'About',
    }),
  },
});

export default createAppContainer(AboutStackNavigator);