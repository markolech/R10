// import React from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
// import MapView from 'react-native-maps';
// //import { Marker } from 'react-native-maps';

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     height: '100%',
//     width: '100%',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     flex: 1
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject
//   },
//  });

//  43.643904

// const GoogleMap = () => {
//   return (
//     <View style={styles.container}>
//       <Text>This is map</Text>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: 43.643904,
//           // longitude: -79.397785,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       />
//       <MapView.Marker
//         style={styles.mapview}
//         coordinate={{latitude: 43.643904, longitude: -79.397785 }}
//         title={"title"}
//         description={"description"}
//         image={require('../images/map_pin.png')}
//       />
//     </View>
//   );
// }

// export default GoogleMap;


// basic React import
import React from 'react'
import MapView from 'react-native-maps'
// react-native imports
import { Image } from 'react-native'
// CSS & Style imports
import r10 from '../images/map_pin.png'

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