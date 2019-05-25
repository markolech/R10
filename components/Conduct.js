import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Conduct = (props) => {
  //console.log(`Conduct props: ${props.description}, ${props.title}, ${props.order}`);
  return (
    <View>
      <Text>{props.description}</Text>
      <Text>{props.title}</Text>
      <Text>{props.order}</Text>
    </View>
  )
}

export default Conduct;