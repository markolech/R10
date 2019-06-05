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
import styles from './styles/styles';
import LinearGradient from 'react-native-linear-gradient';


const SessionDetail = (props) => {  

  const [fav, setFav] = useState(false);

  const renderLightBox = (image, name, bio, link) => (
    <ScrollView style={styles.lightBoxContainer}>
      <View style={styles.imageCircleCenterContainer}>
        <Image
          style={style.presenterImageCenter}
          resizeMode="contain"
          source={{ uri: image }}
        />
        <Text style={styles.sessionTitleText}>{name}</Text>
        <Text style={styles.sessionDescriptionText}>{bio}</Text>
        <Button
          style ={styles.favButton}
          titleStyle={styles.buttonTitle}
          ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ['#C5414D','#9963E9'],
              start: { x:0, y:0 },
              end: { x:2, y:1 },
            }}
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

  storeData = async (id) => {
    try {
      console.log(`adding data: ${id}`)
      await AsyncStorage.setItem(id, `true`);
    } catch (error) {
      // Error saving data
      console.log(`error adding data: ${error}`)
    }
  };

  let hour = moment(data.Session.startTime);
  hour = hour.format('h');

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

  removeData = async (id) => {
    try {
      console.log('calling removeitem')
      AsyncStorage.removeItem(id);
    }
    catch (error) {
      // Error deleting data
      console.log(`there is an error in removeData that is ${error}`)
    }
  }
  
  checkData(id);

  return (
    <View style={{marginTop: 20}}>      
      <View style={styles.locationContainer}>
            <Text style={styles.locationText}> {data.Session.location} </Text>
              {
                fav
                ? <Text><Icon style={styles.heartIcon} name="ios-heart" size={23}></Icon></Text>
                : <Text><Icon style={styles.heartIcon} name="ios-heart-empty" size={23}></Icon></Text>
              }
          </View>
      <View>
        <Text style={styles.sessionTitleText}>{data.Session.title}</Text> 
      </View>
      <View>
        <Text style={styles.sessionTimeText}>{hour}:00 PM</Text>
      </View>
      <View>
      <Text style={styles.sessionDescriptionText}>{data.Session.description}</Text> 
      </View>
      <View>
        <Text style={styles.sessionLocationText}>Presented by:</Text>
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
              style={styles.sessionDetailSpakerImage}
              source={{uri: data.Session.speaker.image}}
            />
            <Text style={styles.sessionPresenterText}>{data.Session.speaker.name}</Text>
          </View>
        </Lightbox>
      </View>
      <Divider style={{ backgroundColor: '#E6E6E6' }} />

      {
        fav
        ? <Button
            style={styles.favButton}
            titleStyle={styles.buttonTitle}
            ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ['#C5414D','#9963E9'],
              start: { x:0, y:0 },
              end: { x:2, y:1 },
            }}
            title="Remove from Faves"
            onPress={() => removeData(data.Session.id)}
          />
        : <Button
          style={styles.favButton}
          titleStyle={styles.buttonTitle}
          ViewComponent={LinearGradient}
            linearGradientProps={{
              colors: ['#C5414D','#9963E9'],
              start: { x:0, y:0 },
              end: { x:2, y:1 },
            }}
          title="Add to Faves"
          onPress={() => storeData(data.Session.id)}
        />

        
      }
    </View>
  ) 
}

export default SessionDetail;