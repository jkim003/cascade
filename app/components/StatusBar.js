'use strict'
import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

class StatusBar extends Component {
  render() {
    return (
      <View style={styles.statusBarBackground}></View>
    )
  }
}

const styles = StyleSheet.create({
  statusBarBackground: {
    backgroundColor: 'white',
    height : 20,
  }
})

module.exports = StatusBar
