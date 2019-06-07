import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Session from './Session';
import { nest } from 'd3-collection';


const GET_SESSIONS = gql`
  {
    allSessions{
      id
      description
      location
      startTime
      title
    }
  }
`;

const Sessions = (props) => {

  const { data, error, loading } = useQuery(GET_SESSIONS);

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
  
  const groupedData = nest()
  .key(el => el.startTime)
  .entries(data.allSessions)

  console.log(groupedData);

  let sessionsComponent = data.allSessions.map(session => 
    <Session 
      key={session.id}
      startTime={session.startTime}
      description={session.description}
      location={session.location}
      title={session.title}
      id={session.id}
      {...props}
    />
  );

  return (
    <View>
      {sessionsComponent}
    </View>
  )
  }
  export default Sessions

  /* //     {groupedData.map(x => 
  //       <View>
  //         <Text>{x.key}</Text>
  //       {
  //           sessionsComponent = x.values.map(y => 
  //             <Text>{y.description}</Text>
  //           )
  //       }
  //       </View>
  //       )*/

