import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import styles from '../styles/Style'
import Swipeout from 'react-native-swipeout'

export default class MessageItem extends Component {
  constructor(props) {
    super(props)
    avatar = require('../assets/img/frank-lampard.jpg')
  }

  onClickItem = (text) => {
    alert(text)
  }

  render() {
    let swipeoutBtns = [
      {
        component: <ButtonRemove />
      }
    ]
    return (
      <Swipeout left={swipeoutBtns} sensitivity={0}>
        <TouchableOpacity onPress={() => this.onClickItem(this.props.item.name)}>
          <View style={styles.messageRow}>
            <Image source={avatar} style={styles.avatarMessage} />
            <View style={styles.messageSummary}>
              <Text style={styles.messageAuthor}>{this.props.item.name}</Text>
              <Text style={styles.messageBegin}>{this.props.item.lastMessage}</Text>
            </View>
            <View style={styles.messageTimeContainer}>
              <Text style={styles.messageTime}>7:03 PM</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Swipeout>
    )
  }
}

class ButtonRemove extends Component {
  render() {
    return (
      <TouchableOpacity style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../assets/img/icons/ic-trash-white-64dp.png')} style={{ width: 29, height: 29 }} />
      </TouchableOpacity>
    )
  }
}