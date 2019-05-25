import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import {Platform, StyleSheet, Text, View} from 'react-native';


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

// const Dogs = () => {
//   const { data, error, loading } = useQuery(GET_DOGS);
//   if (loading) {
//     return <div>Loading...</div>;
//   };
//   if (error) {
//     return <div>Error! {error.message}</div>;
//   };

//   return (
//     <ul>
//       {data.dogs.map(dog => (
//         <li key={dog.id}>{dog.breed}</li>
//       ))}
//     </ul>
//   );
// };

const About = () => {
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
    console.log("About data: ", data);
    return (
        <View>
                <Text>Data goes here</Text>
        </View>
    )
}

export default About;