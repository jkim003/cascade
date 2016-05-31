'use strict'
import React, { Component } from 'react'
import { AppRegistry, Text, View, Image, ListView } from 'react-native'
import ViewContainer from './app/components/ViewContainer'
import StatusBar from './app/components/StatusBar'
import splash from './app/partials/message/splash'
import styles from './stylesheets/js/styles'
import _ from 'lodash'
import Icon from 'react-native-vector-icons/FontAwesome'

const people = [
  {firstName: "john", lastName: "kim", location: "philadelphia"},
  {firstName: "yumee", lastName: "kim", location: "philadelphia"},
  {firstName: "alice", lastName: "lee", location: "new york"}
]

class cascade extends Component {
  constructor(props) {
    super(props)
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      peopleDataSource : ds.cloneWithRows(people)
    }
  }
  render() {
    return (
      <ViewContainer>
        <StatusBar/>
        <ListView
          style={{marginTop: 100}}
          dataSource={this.state.peopleDataSource}
          renderRow={(person) => { return this._renderPersonRow(person)}} />
      </ViewContainer>
    )
  }

  _renderPersonRow(person) {
    return (
      <View style={styles.personRow}>
        <Text style={styles.personName}>{`${_.capitalize(person.firstName)} ${_.capitalize(person.lastName)}`}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-right" />
      </View>
    )
  }
}

AppRegistry.registerComponent('cascade', () => cascade);
