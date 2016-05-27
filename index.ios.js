'use strict'
import React, { Component } from 'react'
import { AppRegistry, Text, View, StyleSheet } from 'react-native'
import ViewContainer from './app/components/ViewContainer'
import splash from './app/partials/message/splash'
import styles from './stylesheets/js/styles'

class cascade extends Component {
  render() {
    return (

      <ViewContainer>
        <Text>{splash}</Text>
      </ViewContainer>

    );
  }
}

const styles = StyleSheet.create({
  testing: {
    color: 'white'
  }
});

AppRegistry.registerComponent('cascade', () => cascade);
