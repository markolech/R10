import React from 'react'
import MapView from 'react-native-maps'
import { Image } from 'react-native'
import r10 from '../images/map_pin.png'

// const ScheduleStackNavigator = createStackNavigator({
//   Schedule: {
//     screen: Schedule,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Schedule',
//       headerBackTitle: null
//     }),
//   },
//   SessionDetail: {
//     screen: SessionDetail,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Session',
//     }),
//   }
// });

// export default createAppContainer(ScheduleStackNavigator);

const GoogleMap = props => {
  
  return (
    
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
          latitude: 43.643884,
          longitude: -79.397609,
          latitudeDelta: 0.0082,
          longitudeDelta: 0.0021,
      }}
    >
      <MapView.Marker
        coordinate={{ latitude: 43.643884, longitude: -79.397609 }}
        title={'R10'}
        description={'The best tech conference in the Six!'}
      >
        <Image source={r10} />
      </MapView.Marker>
    </MapView>
  )
}
export default GoogleMap;