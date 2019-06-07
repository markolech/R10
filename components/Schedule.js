import React, { useState } from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import Sessions from './Sessions';
import { NavigationEvents } from 'react-navigation';

const Schedule = (props) => {

  const [update, setUpdate] = useState(false);

  return (
    <ScrollView>
        <NavigationEvents 
          onDidFocus={() => setUpdate(true)}
        />
      <Sessions
        scheduleShow={true}
        {...props}
      />
    </ScrollView>
  )
}

export default Schedule;