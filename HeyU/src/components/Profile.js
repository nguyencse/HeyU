import React, { Component } from 'react'
import {
  View,
  Text,
  StatusBar
} from 'react-native'
import styles from '../styles/Style'

export default class Contacts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Text>Profile</Text>
      </View>
    )
  }
}