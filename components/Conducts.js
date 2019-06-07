import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Conduct from './Conduct';
import Collapsible from 'react-native-collapsible';
import styles from './styles/styles';

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

  //console.log("About data: ", data.allConducts[0].title);

  let conductsComponent = data.allConducts.map(conducts => 
    <Conduct
      key={conducts.id}
      description={conducts.description}
      title={conducts.title}
      order={conducts.order}
    />
  )

  return (
    <View>
      <Text style={styles.header2}>Code of Conduct</Text>
        {conductsComponent}
    </View>
  )
}

export default Conducts;