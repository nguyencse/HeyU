import React, { Component } from 'react'
import {
  Image
} from 'react-native'
import styles from '../styles/Style'
import colors from '../colors/Color'
import { TabNavigator } from 'react-navigation'
import Toolbar from '../components/Toolbar'
import Login from '../components/Login'
import Messages from '../components/Messages'
import Contacts from '../components/Contacts'

export default Main = TabNavigator({
  Messages: {
    screen: Messages,
    navigationOptions: {
      header: <Toolbar title="Messages" />,
      tabBarLabel: 'Messages',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/img/icons/ic-message.png')}
          style={[styles.iconTab, { tintColor: tintColor }]}
        />
      )
    }
  },
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      header: <Toolbar title="Contacts" />,
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/img/icons/ic-contact.png')}
          style={[styles.iconTab, { tintColor: tintColor }]}
        />
      )
    }
  }
}, {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: colors.white,
      style: {
        backgroundColor: colors.primary
      },
      indicatorStyle: {
        backgroundColor: colors.white
      },
      showIcon: true,
      showLabel: false
    }
  })
