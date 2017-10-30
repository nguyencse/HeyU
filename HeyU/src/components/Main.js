import React, { Component } from 'react'
import {
} from 'react-native'
import styles from '../styles/Style'
import { TabNavigator } from 'react-navigation'
import Messages from '../components/Messages'
import Login from '../components/Login'

export default Main = TabNavigator({
  Messages: {
    screen: Messages
  },
  Messages1: {
    screen: Messages
  },
  Messages2: {
    screen: Messages
  },
  Messages3: {
    screen: Messages
  },
  Messages4: {
    screen: Messages
  }
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
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
