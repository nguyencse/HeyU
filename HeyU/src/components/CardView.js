import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import styles from '../uitls/styles'
import * as constants from '../uitls/constants'

export default class CardView extends Component {
  render() {
    let { item } = this.props
    return (
      <View style={{flex: 1, height: 80, backgroundColor: 'red', borderRadius: 100}}>
      </View>
    )
  }
}