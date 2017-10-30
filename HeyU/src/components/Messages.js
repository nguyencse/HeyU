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
  {key: 1, name: 'Ryan Giggs'},
  {key: 2, name: 'Frank Lampard'},
  {key: 3, name: 'David James'},
  {key: 4, name: 'Gareth Barry'},
  {key: 5, name: 'Emile Heskey'},
  {key: 6, name: 'Mark Schwarzer'},
  {key: 7, name: 'Brad Friedel'},
  {key: 8, name: 'Kevin Davies'},
  {key: 1, name: 'Ryan Giggs'},
  {key: 2, name: 'Frank Lampard'},
  {key: 3, name: 'David James'},
  {key: 4, name: 'Gareth Barry'},
  {key: 5, name: 'Emile Heskey'},
  {key: 6, name: 'Mark Schwarzer'},
  {key: 7, name: 'Brad Friedel'},
  {key: 8, name: 'Kevin Davies'},
  {key: 1, name: 'Ryan Giggs'},
  {key: 2, name: 'Frank Lampard'},
  {key: 3, name: 'David James'},
  {key: 4, name: 'Gareth Barry'},
  {key: 5, name: 'Emile Heskey'},
  {key: 6, name: 'Mark Schwarzer'},
  {key: 7, name: 'Brad Friedel'},
  {key: 8, name: 'Kevin Davies'}
]

export default class Messages extends Component {
  static navigationOptions = {
    header: <Toolbar />,
    tabBarLabel: 'Messages',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../assets/img/icons/ic-message.png')}
        style={[styles.iconTab, {tintColor: tintColor}]}
      />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <FlatList
          data={dataMessages}
          renderItem={({item}) => <MessageItem item={item} />}
        />
      </View>
    )
  }
}