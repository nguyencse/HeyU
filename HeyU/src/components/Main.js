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
  Login: {
    screen: Login
  },
  Login1: {
    screen: Login
  },
  Login2: {
    screen: Login
  },
  Login3: {
    screen: Login
  },
  Login4: {
    screen: Login
  },
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
