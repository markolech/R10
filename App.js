/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import apolloClient from './apolloClient';
//import { ApolloProvider } from "react-apollo";
import { ApolloProvider } from 'react-apollo-hooks';
import { Header } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';

//import About from './components/About';
//import Schedule from './components/Schedule';
//import Conducts from './components/Conducts'
import CreateBottomTabNavigator from './components/CreateBottomTabNavigator';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// const Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//       </View>
//     );
//   }
// }

// const MainNavigator = createStackNavigator({
//   About: {screen: About},
//   Map: {screen: GoogleMap},
// });

const AppContainer = createAppContainer(CreateBottomTabNavigator);

// class HomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Welcome',
//   };
//   render() {
//     const {navigate} = this.props.navigation;
//     return (
//       <Button
//         title="Go to Jane's profile"
//         onPress={() => navigate('Profile', {name: 'Jane'})}
//       />
//     );
//   }
// }

function App() {   
  return (
    <ApolloProvider client={apolloClient}>
      {/* <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to R10</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View> */}
      {/* <About /> */}
      {/* <Header
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      /> */}
      {/* <Conducts /> */}
      <AppContainer />
    </ApolloProvider>
 )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
// });

export default App;