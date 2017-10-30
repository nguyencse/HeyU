import React, { Component } from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'
import styles from '../styles/Style'
import Swipeout from 'react-native-swipeout'

export default class MessageItem extends Component {
  constructor(props) {
    super(props)
    avatar = require('../assets/img/avatar.jpg')
  }

  render() {
    return (
      <View style={styles.messageRow}>
        <Image source={avatar} style={styles.avatarMessage} />
        <View style={styles.messageSummary}>
          <Text style={styles.messageAuthor}>{this.props.item.name}</Text>
          <Text style={styles.messageBegin}>Xin chao cac ban</Text>
        </View>
        <View style={styles.messageTimeContainer}>
          <Text style={styles.messageTime}>7:03 PM</Text>
        </View>
      </View>
    )
  }
}