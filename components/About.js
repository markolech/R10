import React from 'react'
import {Platform, StyleSheet, Text, View} from 'react-native';
import Conducts from './Conducts';

const About = () => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      marginTop: 50
    },
    header2: {
      fontSize: 16,
      textAlign: 'center',
      margin: 10,
    },
    header1: {
      fontSize: 18,
      textAlign: 'center',
      margin: 10,
      marginTop: 50
    },
  });

  return (
    <View styles={styles.container}>
      {/* R10 image goes here */}
      {/* line break goes here */}
      <Text style={styles.header1}>R10</Text>
      <Text style={styles.header2}>R10 is a conference that focuses on just about any topic related to dev.</Text>
      <Text style={styles.header2}>The R10 conference will take place on Tuesday, June 27, 2017 in Vacouver, BC.</Text>
      <Conducts />
    </View>
  )
}

export default About;