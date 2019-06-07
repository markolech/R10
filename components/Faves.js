import React from 'react';
import { ScrollView } from 'react-native';
import Sessions from './Sessions';


const Faves = (props) => {

  return (
    <ScrollView>
      <Sessions 
      favesShow = {true}
      {...props} />
    </ScrollView>
  )
}

export default Faves;