import React, { Component } from 'react'
import {
  View,
  Text,
  StatusBar,
  Image,
  FlatList
} from 'react-native'
import styles from '../styles/Style'
import MessageItem from './MessageItem'
import Toolbar from './Toolbar'

const dataMessages = [
  { key: 1, name: 'Ryan Giggs', avatar: '../assets/img/avatar.jpg', lastMessage: 'Lorem ipsum dolor sit amet...' },
  { key: 2, name: 'Frank Lampard', avatar: '../assets/img/david-james.jpg', lastMessage: 'consectetur adipiscing elit, sed do...' },
  { key: 3, name: 'David James', avatar: '../assets/img/frank-lampard.jpg', lastMessage: 'eiusmod tempor incididunt ut labore...' },
  { key: 4, name: 'Gareth Barry', avatar: '../assets/img/ryan-giggs.png', lastMessage: 'et dolore magna aliqua. Ut enim...' },
  { key: 5, name: 'Emile Heskey', avatar: '../assets/img/david-james.jpg', lastMessage: 'ad minim veniam, quis...' },
  { key: 6, name: 'Mark Schwarzer', avatar: '../assets/img/frank-lampard.jpg', lastMessage: 'nostrud exercitation ullamco laboris...' },
  { key: 7, name: 'Brad Friedel', avatar: '../assets/img/david-james.jpg', lastMessage: 'nisi ut aliquip ex ea commodo consequat...' },
  { key: 8, name: 'Kevin Davies', avatar: '../assets/img/ryan-giggs.png', lastMessage: 'Duis aute irure dolor in...' }
]

export default class Messages extends Component {
  static navigationOptions = {
    header: <Toolbar title="Messages" />,
    tabBarLabel: 'Messages',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/img/icons/ic-message.png')}
        style={[styles.iconTab, { tintColor: tintColor }]}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <FlatList
          data={dataMessages}
          renderItem={({ item }) => <MessageItem item={item} />}
        />
      </View>
    )
  }
}