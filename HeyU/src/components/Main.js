import React, { Component } from 'react'
import {
} from 'react-native'
import styles from '../styles/Style'
import { TabNavigator } from 'react-navigation'
import Login from '../components/Login'
import Messages from '../components/Messages'
import Contacts from '../components/Contacts'

export default Main = TabNavigator({
  Messages: {
    screen: Messages
  },
  Contacts: {
    screen: Contacts
  }
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: 'white',
      style: {
        backgroundColor: '#008530'
      },
      indicatorStyle: {
        backgroundColor: 'white'
      },
      showIcon: true,
      showLabel: false
    }
  })
