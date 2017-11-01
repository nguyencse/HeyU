import React, { Component } from 'react'
import {
  View,
  Text,
  StatusBar
} from 'react-native'
import styles from '../../styles/Style'

export default class Adding extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Text>Adding</Text>
      </View>
    )
  }
}