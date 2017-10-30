import React, { Component } from 'react'
import {
  View,
  Text,
  StatusBar,
  Image
} from 'react-native'
import styles from '../styles/Style'

export default class Contact extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: 'Messages',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/img/icon-message.png')}
        style={[styles.iconTab, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Text>Messages</Text>
      </View>
    )
  }
}