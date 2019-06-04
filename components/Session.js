import React, { useState } from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Divider } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';
import styles from './styles/styles.js';

// import 

// // const nestedData = nest()
// //  .key(d => d.Time)
// //  .entries(data.allSessions)

const Session = (props) => {

  const [fav, setFav] = useState(false);

  checkData = async (id) => {
    let matchCheck;
    try {
      matchCheck = await AsyncStorage.getItem(id);
      if (matchCheck !== null) {
        // We have data!!
        //console.log(`fav detected: ${id}`);
        setFav(true);
      } else {
        setFav(false);
        matchCheck = false;
        //console.log(`${id} is not a fav`);
      }
    } catch (error) {
      // Error retrieving data
      console.log(`there is an error in retrieveData that is ${error}`)
    }
    return matchCheck;
  };
  
  checkData(props.id);

  let hour = moment(props.startTime);
  hour = hour.format('h');
  
  //console.log('in schedule: ', props.scheduleShow)
  // console.log('in faves', props.favesShow)
  // console.log('fav: ', fav)
  
  return (
      <View>
      { (props.favesShow && fav)
      ?  <View>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{hour}:00 PM</Text>
          </View>
          <TouchableOpacity onPress={() => props.navigation.navigate('SessionDetail', { id: props.id })}>
            <Text style={styles.titleText}>{props.title}</Text> 
          </TouchableOpacity>
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}> {props.location} </Text>
                {
                fav
                ? <Text><Icon style={styles.heartIcon} name="ios-heart" size={23}></Icon></Text>
                : <Text><Icon style={styles.heartIcon} name="ios-heart-empty" size={23}></Icon></Text>
              }
          </View>
          <Text>
          </Text>
          <Divider style={{ backgroundColor: '#E6E6E6' }} />
        </View>
        : <View></View>
      }
      { 
        (props.scheduleShow)
        ? <View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>{hour}:00 PM</Text>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('SessionDetail', { id: props.id })}>
              <Text style={styles.titleText}>{props.title}</Text> 
            </TouchableOpacity> 
            <View style={styles.locationContainer}>
              <Text style={styles.locationText}> {props.location} </Text>
              {
                fav
                ? <Text><Icon style={styles.heartIcon} name="ios-heart" size={23}></Icon></Text>
                : <Text><Icon style={styles.heartIcon} name="ios-heart-empty" size={23}></Icon></Text>
              }
            </View>
            <Text>
              {/* Is this a fave? {isFave} */}
            </Text>
            <Divider style={{ backgroundColor: '#E6E6E6' }} />
          </View> 
        : <View></View>
      }
      </View>
      
  )
}

export default Session;