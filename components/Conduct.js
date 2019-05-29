import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

// const Conduct = (props) => {

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     backgroundColor: '#F5FCFF',
  //   },
  //   header2: {
  //     fontSize: 16,
  //     textAlign: 'center',
  //     margin: 10,
  //   },
  //   conduct: {
  //     fontSize: 12,
  //     textAlign: 'center',
  //     margin: 10,
  //   } 
  // });

  //console.log(`Conduct props: ${props.title}, ${props.order}`);
  // return (
  //   <View style={styles.conduct}>
  //     <Text style={styles.header2}>{props.title}</Text>
  //     <Text style={styles.conduct}>{props.description}</Text>
  //     {/* <Text style={styles.conduct}>{props.order}</Text> */}
  //   </View>
  // )

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    header: {
      fontSize: 18,
      margin: 10,
      color: '#916ae3'
    },
    content: {
      margin: 10,
    },
    headerText: {
      fontSize: 18,
      fontFamily: 'Montserrat-Regular',
      color: '#916ae3'
    },
    contentText: {
      fontSize: 19, 
      fontFamily: 'Montserrat-Light',
      color: '#000000'
    }
  });

  const SECTIONS = [
    {
      title: '',
      content: '',
    }
    // {
    //   title: 'Second',
    //   content: 'Lorem ipsum...',
    // },
  ];
  
class Conduct extends React.Component {
    state = {
      activeSections: [],
      plusMinus: '+ '
    };
  
    // _renderSectionTitle = section => {
    //   return (
    //     <View style={styles.content}>
    //       <Text>{section.content}</Text>
    //     </View>
    //   );
    // };
  
    _renderHeader = section => {
     //console.log('SECTIONS: ', SECTIONS.plusMinus)
      return (
        <View style={styles.header}>
          <Text style={styles.headerText}>{this.state.plusMinus}{this.props.title}</Text>
        </View>
      );
    };
  
    _renderContent = section => {
      return (
        <View style={styles.content}>
          <Text style={styles.contentText}>{this.props.description}</Text>
        </View>
      );
    };
  
    _updateSections = activeSections => {
      this.setState({ activeSections });
      this.state.plusMinus === '+ ' ? this.setState({ plusMinus: '- '}) : this.setState({ plusMinus: '+ '});
    };
  
    render() {
      
      return (
        <Accordion
          sections={SECTIONS}
          activeSections={this.state.activeSections}
          renderSectionTitle={this._renderSectionTitle}
          renderHeader={this._renderHeader}
          renderContent={this._renderContent}
          onChange={this._updateSections}
        />
      );
    }
}

export default Conduct;

