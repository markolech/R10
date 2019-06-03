import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
import { Divider } from 'react-native-elements';
import { Button } from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';
import Lightbox from 'react-native-lightbox';

const SessionDetail = (props) => {
  
  const [fav, setFav] = useState(false);

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
      fontSize: 19,
      color: 'black'
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
    },
    headerImage: {
      marginLeft: 10,
      justifyContent: 'flex-end'
    },
    roundImage: {
      height: 250,
      width: 250,
    },
  });   

  const renderLightBox = (image, name, bio, link) => (
    <ScrollView style={{ flex:1, marginBottom: 100 }}>
      <View style={{ flex: 1, marginTop: 200, backgroundColor: 'white' }}>
        <Image
          style={{width: 125, height: 125, marginTop: 40}}
          resizeMode="contain"
          source={{ uri: image }}
        />
        <Text style={styles.titleText}>{name}</Text>
        <Text style={styles.titleText}>{bio}</Text>
        <Button
          style={{margin: 60}}
          title="Read More on Wikipedia"
          onPress={() => {
            Linking.openURL(link);
          }}
        />
      </View>
    </ScrollView>
  )

  const { navigation } = props;
  const id = navigation.getParam('id', 'NO-ID');

  checkData = async (id) => {
    let matchCheck;
    try {
      matchCheck = await AsyncStorage.getItem(id);
      if (matchCheck !== null) {
        // We have data!!
        console.log(`fav detected: ${id}`);
        setFav(true);
      } else {
        setFav(false);
        matchCheck = false;
        console.log(`${id} is not a fav`);
      }
    } catch (error) {
      // Error retrieving data
      console.log(`there is an error in retrieveData that is ${error}`)
    }
    return matchCheck;
  };
  
  checkData(id);

  const GET_SESSION = gql`
    query Session($id: ID!){
      Session(id: $id) {
        id
        description
        location
        startTime
        title
        speaker {
          id
          bio
          image
          name
          url
        }
      }
    }
  `;

  const { data, error, loading } = useQuery(GET_SESSION, {
    variables: { id: id }
  });

  if (loading) {
    return (
      <View>
          <Text>Loading...</Text>
      </View>
    )
  };
  if (error) {
    return <View>
      <Text>Error! {error.message}</Text>
    </View>
  };

  const getFaves = async (id) => {
    let favesString;
    try {
      //favesString = await AsyncStorage.getAllKeys('id') || 'none';
      favesString = await AsyncStorage.getAllKeys() || 'none';
      // if (favesString != null){
      //   let favesObject = JSON.parse(favesString)
      //   //console.log('favesObject ', favesObject)
      // }
      console.log('favesString ', favesString);
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
    
    console.log('returning favesString from getFaves', favesString);
    return favesString;
  }

  storeFaves = async (id) => {
    let finalList;;
    try {
      console.log(`adding data: ${id}`)
      finalList = await AsyncStorage.setItem( `${id}`, 'true');
    } catch (error) {
      // Error saving data
      console.log(`error adding data: ${error}`)
    }
    return finalList;
  }

  removeFromFaves = async (id) => {
    try {
     console.log(`removing id: ${id}`)
      await AsyncStorage.removeItem(id);
    }
    catch (error) {
      // Error saving data
      console.log(`error removing data: ${error}`)
    }
  }

  let hour = moment(data.Session.startTime);
  hour = hour.format('h');

  return (
    <View>
      <View>
        <Text style={styles.locationText}>{data.Session.location}
          {
            fav
            ? <Icon style={styles.heartIcon} name="ios-heart" size={23}></Icon>
            : <Icon style={styles.heartIcon} name="ios-heart-empty" size={23}></Icon>
          }
        </Text>
      </View>
      <View>
        <Text style={styles.titleText}>{data.Session.title}</Text> 
      </View>
      <View>
        <Text style={styles.timeText}>{hour}:00 PM</Text>
      </View>
      <View>
      <Text style={styles.titleText}>{data.Session.description}</Text> 
      </View>
      <View>
        <Text style={styles.locationText}>Presented by:</Text>
      </View>
      <View> 
        <Lightbox 
          springConfig={{tension: 15, friction: 7}} 
          swipeToDismiss={false} 
          renderContent={() => renderLightBox(data.Session.speaker.image, data.Session.speaker.name, data.Session.speaker.bio, data.Session.speaker.url)}
          renderHeader={close => (
            <TouchableOpacity onPress={close}>
              <View style={{flex: 4, flexDirection: "row"}}>
                <Icon style={{color: 'white', marginTop: 50, marginLeft: 20}} name="ios-close" size={40}></Icon>
                <Text style={{fontSize: 20, color: 'white', marginTop: 57, marginLeft: 100 }}>About the Speaker</Text>
              </View>
          </TouchableOpacity> )}
          >
          <View>
            <Image
              style={{width: 66, height: 58}}
              source={{uri: data.Session.speaker.image}}
            />
            <Text style={styles.titleText}>{data.Session.speaker.name}</Text>
          </View>
        </Lightbox>
      </View>
      <Divider style={{ backgroundColor: '#E6E6E6' }} />
      
      { !fav 
        ?
          <Button
            title="Add to Faves"
            onPress={() => storeFaves(data.Session.id)}
          />
        : 
          null
      }

      {/* <Button
        title="Check Faves"
        onPress={() => getFaves(data.Session.id)}
      /> */}

      { fav 
        ?
          <Button
            title="Remove from Faves"
            onPress={() => removeFromFaves(data.Session.id)}
          />
        : 
          null
      }
    </View> 
  )
}

export default SessionDetail;