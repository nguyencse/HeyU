import React, { Component } from 'react'
import {
  View,
  StatusBar,
  FlatList
} from 'react-native'

import styles from '../uitls/styles'
import MessageItem from '../components/MessageItem'

const dataMessages = [
  { id: 1, name: 'Ryan Giggs', avatar: 'https://goo.gl/q4ZLqm', lastMessage: 'Lorem ipsum dolor...' },
  { id: 2, name: 'Frank Lampard', avatar: 'https://goo.gl/ZhqAfS', lastMessage: 'consectetur adipisci...' },
  { id: 3, name: 'David James', avatar: 'https://goo.gl/QQoQ57', lastMessage: 'eiusmod tempor incididunt...' },
  { id: 4, name: 'Gareth Barry', avatar: 'https://goo.gl/DZ6S4L', lastMessage: 'et dolore magna aliqua...' },
  { id: 5, name: 'Emile Hesid', avatar: 'https://goo.gl/Y5B7Wn', lastMessage: 'ad minim veniam, quis...' },
  { id: 6, name: 'Mark Schwarzer', avatar: 'https://goo.gl/SXHzCg', lastMessage: 'nostrud exercitation...' },
  { id: 7, name: 'Brad Friedel', avatar: 'https://goo.gl/4UatCT', lastMessage: 'nisi ut aliquip ex ea ...' },
  { id: 8, name: 'Kevin Davies', avatar: 'https://goo.gl/Uk6ZGk', lastMessage: 'Duis aute irure dolor in...' },
  { id: 9, name: 'Lionel Messi', avatar: 'https://goo.gl/7W6Uwk', lastMessage: 'asd wr cvak fax gme...' },
  { id: 10, name: 'Cristiano Ronaldo', avatar: 'https://goo.gl/osKKce', lastMessage: 'Despacito asd banladesh...' }
]

export default class Messages extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <FlatList
          keyExtractor={(item) => item.id}
          data={dataMessages}
          renderItem={({ item }) => <MessageItem item={item} />}
        />
      </View>
    )
  }
}