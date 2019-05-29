import React from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import Sessions from './Sessions';

const Schedule = (props) => {

  return (
    <ScrollView>
      {/* <Text>Schedule</Text> */}
      <Sessions {...props} />
    </ScrollView>
  )
}

export default Schedule;