import React from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Divider } from 'react-native-elements';
import moment from 'moment';

const Session = (props) => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      marginTop: 50
    },
    timeContainer: {
      backgroundColor: '#E6E6E6'
    },
    titleText: {
      margin: 15,
      fontFamily: 'Montserrat-Regular',
      fontSize: 19
    },
    timeText: {
      marginTop: 10,
      marginRight: 15,
      marginBottom: 10,
      marginLeft: 15,
      fontFamily: 'Montserrat-Regular',
      fontSize: 19,
      color: 'black',
    },
    locationText: {
      color: '#939393',
      fontSize: 18,
      fontFamily: 'Montserrat-Regular',
      color: '#999999',
      marginTop: 0,
      marginRight: 15,
      marginBottom: 15,
      marginLeft: 15
    },
    heartIcon: {
      color: "black",
      alignItems: 'flex-end'
    }
  });
  
  let hour = moment(props.startTime);
  hour = hour.format('h');
  
  return (
    <View>
      {/* <Text>Session</Text> */}
      {/* <Text>Description: {props.description}</Text> */}
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{hour}:00 PM</Text>
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate('SessionDetail', { id: props.id })}>
        <Text style={styles.titleText}>{props.title}</Text> 
      </TouchableOpacity>
      <Text style={styles.locationText}>{props.location}
        <Icon style={styles.heartIcon} name="ios-heart-empty" size={23}></Icon>
        {/* iconName = `ios-information-circle${focused ? '' : '-outline'}`; */}
      </Text>

      <Divider style={{ backgroundColor: '#E6E6E6' }} />
    </View> 
  )
}

export default Session;