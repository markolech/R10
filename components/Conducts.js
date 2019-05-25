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
  const { data, error, loading } = useQuery(GET_CONDUCTS);
  if (loading) {
    return (
      <View>
          <Text>This is some stuff</Text>
      </View>
    )
  };
  if (error) {
    return <View>
      <Text>Error! {error.message}</Text>
    </View>
  };

  console.log("About data: ", data.allConducts);

  let conductsComponents = data.allConducts.map(conducts => 
    <Conduct
      key={conducts.id}
      description={conducts.description}
      title={conducts.title}
      order={conducts.order}
    />
  )

  return (
    <View>
      <Text>Conducts</Text>
        {conductsComponents}
    </View>
  )
}

export default Conducts;