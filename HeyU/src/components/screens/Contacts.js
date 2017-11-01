import React, { Component } from 'react'
import {
  View,
  Text,
  StatusBar,
  TextInput,
  FlatList
} from 'react-native'
import styles from '../../styles/Style'
import colors from '../../colors/Color'
import MessageItem from '../partials/MessageItem'

const dataMessages = [
  { key: 1, name: 'Ryan Giggs', avatar: 'https://goo.gl/q4ZLqm', lastMessage: 'Lorem ipsum dolor...' },
  { key: 2, name: 'Frank Lampard', avatar: 'https://goo.gl/ZhqAfS', lastMessage: 'consectetur adipisci...' },
  { key: 3, name: 'David James', avatar: 'https://goo.gl/QQoQ57', lastMessage: 'eiusmod tempor incididunt...' },
  { key: 4, name: 'Gareth Barry', avatar: 'https://goo.gl/DZ6S4L', lastMessage: 'et dolore magna aliqua...' },
  { key: 5, name: 'Emile Heskey', avatar: 'https://goo.gl/Y5B7Wn', lastMessage: 'ad minim veniam, quis...' },
  { key: 6, name: 'Mark Schwarzer', avatar: 'https://goo.gl/SXHzCg', lastMessage: 'nostrud exercitation...' },
  { key: 7, name: 'Brad Friedel', avatar: 'https://goo.gl/4UatCT', lastMessage: 'nisi ut aliquip ex ea ...' },
  { key: 8, name: 'Kevin Davies', avatar: 'https://goo.gl/Uk6ZGk', lastMessage: 'Duis aute irure dolor in...' },
  { key: 9, name: 'Lionel Messi', avatar: 'https://goo.gl/7W6Uwk', lastMessage: 'asd wr cvak fax gme...' },
  { key: 10, name: 'Cristiano Ronaldo', avatar: 'https://goo.gl/osKKce', lastMessage: 'Despacito asd banladesh...' }
]

export default class Contacts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.textInputSearchContainer}>
          <TextInput placeholder='Search contact...' style={styles.textInputSearch} />
        </View>
        <View style={styles.container}>
          <FlatList
            data={dataMessages}
            renderItem={({ item }) => <MessageItem item={item} />}
          />
        </View>
      </View>
    )
  }
}