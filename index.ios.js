'use strict'
import React, { Component } from 'react'
import { AppRegistry, Text, View, StyleSheet, Image } from 'react-native'
import ViewContainer from './app/components/ViewContainer'
import splash from './app/partials/message/splash'
import styles from './stylesheets/js/styles'

class cascade extends Component {
  render() {
    return (

      <ViewContainer>
        <Image source={require('./images/png/logo.png')}/>
      </ViewContainer>

    );
  }
}

AppRegistry.registerComponent('cascade', () => cascade);
