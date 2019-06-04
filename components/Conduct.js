import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import styles from './styles/styles.js'

  const SECTIONS = [
    {
      title: '',
      content: '',
    }
  ];
  
class Conduct extends React.Component {
    state = {
      activeSections: [],
      plusMinus: '+ '
    };
  
    _renderHeader = section => {
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

