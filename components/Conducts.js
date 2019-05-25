import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Conduct from './Conduct';

const GET_CONDUCTS = gql`
  {
    allConducts{
        id
        description
        title
        order
    }
  }
`;

const Conducts = () => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    header2: {
      fontSize: 16,
      textAlign: 'center',
      margin: 10,
    },
  });

  const { data, error, loading } = useQuery(GET_CONDUCTS);

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

  console.log("About data: ", data.allConducts[0].title);

  let conductsComponent = data.allConducts.map(conducts => 
    <Conduct
      key={conducts.id}
      description={conducts.description}
      title={conducts.title}
      order={conducts.order}
    />
  )

  return (
    <View style={styles.header2}>
      <Text style={styles.header2}>Code of Conduct</Text>
        {conductsComponent}
    </View>
  )
}

export default Conducts;