import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const Conduct = (props) => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    header2: {
      fontSize: 16,
      textAlign: 'center',
      margin: 10,
    },
    conduct: {
      fontSize: 12,
      textAlign: 'center',
      margin: 10,
    } 
  });

  console.log(`Conduct props: ${props.title}, ${props.order}`);
  return (
    <View style={styles.conduct}>
      <Text style={styles.header2}>{props.title}</Text>
      <Text style={styles.conduct}>{props.description}</Text>
      {/* <Text style={styles.conduct}>{props.order}</Text> */}
    </View>
  )
}

export default Conduct;

