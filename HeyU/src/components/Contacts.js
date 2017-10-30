import React, { Component } from 'react'
import {
  View,
  Text,
  StatusBar,
  Image
} from 'react-native'
import styles from '../styles/Style'
import Toolbar from './Toolbar'

export default class Contacts extends Component {
  static navigationOptions = {
    header: <Toolbar title="Contacts" />,
    tabBarLabel: 'Contacts',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/img/icons/ic-contact.png')}
        style={[styles.iconTab, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Text>Contacts</Text>
      </View>
    )
  }
}