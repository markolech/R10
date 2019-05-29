import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import {Platform, StyleSheet, Text, View} from 'react-native';

const SessionDetail = (props) => {
  const { navigation } = props;
  const id = navigation.getParam('id', 'NO-ID');


//   const TOGGLE_LIKED_PHOTO = gql`
//   mutation toggleLikedPhoto($id: String!) {
//     toggleLikedPhoto(id: $id) @client
//   }
// `;

  const GET_SESSION = gql`
    query Session($id: ID!){
      Session(id: $id) {
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

  //console.log('data from useQuery GET_SESSION!', data);

  return (
    <View>
      <Text>Session with id: {id}</Text>
    </View>
  )
}

export default SessionDetail;