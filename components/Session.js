import React, { useState, useEffect } from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Divider } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import moment from 'moment';
import styles from './styles/styles.js';
import { NavigationEvents } from 'react-navigation';

// import 
// // const nestedData = nest()
// //  .key(d => d.Time)
// //  .entries(data.allSessions)

const Session = (props) => {

  const [fav, setFav] = useState(false);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    checkData = async (id) => {
      let matchCheck;
      try {
        if(update){
          matchCheck = await AsyncStorage.getItem(id);
          if (matchCheck !== null) {
            // We have data!!
            // console.log(`fav detected: ${id}`);
            setFav(true);
          } else {
            setFav(false);
            matchCheck = false;
            // console.log(`${id} is not a fav`);
          }
          setUpdate(false);
        }
      } catch (error) {
        // Error retrieving data
        console.log(`there is an error in retrieveData that is ${error}`)
      }
    };
    checkData(props.id)
  }, [update]);

  storeData = async (id) => {
    try {
      console.log(`adding data: ${id}`)
      await AsyncStorage.setItem(id, `true`);
      setUpdate(true)
    } catch (error) {
      // Error saving data
      console.log(`error adding data: ${error}`)
    }
  };

  let hour = moment(props.startTime);
  hour = hour.format('h:mm a');

  removeData = async (id) => {
    try {
      console.log('calling removeitem')
      AsyncStorage.removeItem(id);
      setUpdate(true);
    }
    catch (error) {
      // Error deleting data
      console.log(`there is an error in removeData that is ${error}`)
    }
  }
  
  // checkData(id);
  
  // console.log('in schedule: ', props.scheduleShow)
  // console.log('in faves', props.favesShow)
  // console.log('fav: ', fav)
  
  // checkData = async (id) => {
  //   let matchCheck;
  //   try {
  //     matchCheck = await AsyncStorage.getItem(id);
  //     if (matchCheck !== null) {
  //       // We have data!!
  //       //console.log(`fav detected: ${id}`);
  //       setFav(true);
  //     } else {
  //       setFav(false);
  //       matchCheck = false;
  //       //console.log(`${id} is not a fav`);
  //     }
  //   } catch (error) {
  //     // Error retrieving data
  //     console.log(`there is an error in retrieveData that is ${error}`)
  //   }
  //   return matchCheck;
  // };

  //checkData(props.id);
  
  return (
      <View>
      { (props.favesShow && fav)
      ?  <View>
         <NavigationEvents 
              onDidFocus={() => setUpdate(true)}
            />
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{hour}</Text>
          </View>
          <TouchableOpacity onPress={() => props.navigation.navigate('SessionDetail', { id: props.id })}>
            <Text style={styles.titleText}>{props.title}</Text> 
          </TouchableOpacity>
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}> {props.location} </Text>
            {/* <TouchableOpacity onPress={() => removeData(props.id)}> */}
              <Text><Icon style={styles.heartIcon} name="ios-heart" size={23}></Icon></Text>
            {/* </TouchableOpacity> */}
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
            <NavigationEvents 
              onDidFocus={() => setUpdate(true)}
            />
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>{hour}</Text>
            </View>
            <TouchableOpacity onPress={() => props.navigation.navigate('SessionDetail', { id: props.id })}>
              <Text style={styles.titleText}>{props.title}</Text> 
            </TouchableOpacity> 
            <View style={styles.locationContainer}>
              <Text style={styles.locationText}> {props.location} </Text>
              {
                fav
                ? (
                    // <TouchableOpacity onPress={() => removeData(props.id)}>
                      <Text><Icon style={styles.heartIcon} name="ios-heart" size={23}></Icon></Text>
                    // </TouchableOpacity>
                  )
                : (
                    // <TouchableOpacity onPress={() => storeData(props.id)}>
                      <Text><Icon style={styles.heartIcon} name="ios-heart-empty" size={23}></Icon></Text>
                    // </TouchableOpacity>
                  )
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