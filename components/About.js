import React from 'react'
import { StyleSheet, Text, ScrollView, Image} from 'react-native';
import { Divider } from 'react-native-elements';
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
      fontSize: 26,
      textAlign: 'left',
      margin: 10,
      fontFamily: 'Montserrat-Regular',
      color: '#000000'
    },
    header1: {
      fontSize: 18,
      textAlign: 'center',
      margin: 10,
      marginTop: 50
    },
    content: {
      fontSize: 19,
      fontFamily: 'Montserrat-Light',
      margin: 15
    },
    divider: { 
      backgroundColor: '#E6E6E6',
      marginTop: 20,
      marginRight: 10,
      marginBottom: 20,
      marginLeft: 10
    },
    headerImage: {
      marginTop: 10,
      justifyContent: 'center'
    }
  });

  return (
    <ScrollView>
      <Image
          style={styles.headerImage}
          source={require('../images/r10_logo.png')}
      />
      <Divider style={styles.divider} />
      <Text style={styles.content}>R10 is a conference that focuses on just about any topic related to dev.</Text>
      <Text style={styles.header2}>Date & Venue</Text>
      <Text style={styles.content}>The R10 conference will take place on Tuesday, June 27, 2017 in Vacouver, BC.</Text>
      <Conducts />
    </ScrollView>
  )
}

export default About;