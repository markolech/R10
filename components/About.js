import React from 'react'
import { StyleSheet, Text, ScrollView, Image, View} from 'react-native';
import { Divider } from 'react-native-elements';
import Conducts from './Conducts';
import styles from './styles/styles'

const About = () => {

  return (
    <ScrollView>
      <View style={styles.r10Image}>
        <Image
            style={styles.headerImage}
            source={require('../images/r10_logo.png')}
        />
      </View>
      <Divider style={styles.divider} />
      <Text style={styles.content}>R10 is a conference that focuses on just about any topic related to dev.</Text>
      <Text style={styles.header2}>Date & Venue</Text>
      <Text style={styles.content}>The R10 conference will take place on Tuesday, June 27, 2017 in Vacouver, BC.</Text>
      <Conducts />
    </ScrollView>
  )
}

export default About;