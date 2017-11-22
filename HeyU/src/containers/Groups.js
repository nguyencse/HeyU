import React, { Component } from 'react'
import {
  View,
  Text,
  StatusBar
} from 'react-native'
import styles from '../uitls/Style'

export default class Groups extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Text>Groups</Text>
      </View>
    )
  }
}