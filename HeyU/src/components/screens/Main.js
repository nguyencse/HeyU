import React, { Component } from 'react'
import {
  View,
  Image
} from 'react-native'
import styles from '../../styles/Style'
import colors from '../../colors/Color'
import { TabNavigator } from 'react-navigation'
import Toolbar from '../partials/Toolbar'
import Login from './Login'
import Messages from './Messages'
import Contacts from './Contacts'
import Profile from './Profile'

export default Main = TabNavigator({
  Messages: {
    screen: Messages,
    navigationOptions: {
      header: <Toolbar title='Messages' />,
      tabBarLabel: 'Messages',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../../assets/img/icons/ic-message-green-64dp.png')}
          style={[styles.iconTab, { tintColor: tintColor }]}
        />
      )
    }
  },
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      header: <Toolbar title='Contacts' />,
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../../assets/img/icons/ic-users-green-64dp.png')}
          style={[styles.iconTab, { tintColor: tintColor }]}
        />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: <Toolbar title='Profile' />,
      tabBarLabel: 'Profile',
      tabBarIcon: () => (
        <MiddleTabIcon />
      )
    }
  },
  Profile1: {
    screen: Profile,
    navigationOptions: {
      header: <Toolbar title='Profile' />,
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../../assets/img/icons/ic-users-green-64dp.png')}
          style={[styles.iconTab, { tintColor: tintColor }]}
        />
      )
    }
  },
  Profile2: {
    screen: Profile,
    navigationOptions: {
      header: <Toolbar title='Profile' />,
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../../assets/img/icons/ic-user-green-64dp.png')}
          style={[styles.iconTab, { tintColor: tintColor }]}
        />
      )
    }
  }
}, {
    initialRouteName: 'Profile',
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: colors.black,
      style: {
        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderTopColor: colors.grayLite
      },
      indicatorStyle: {
        backgroundColor: colors.primary
      },
      showIcon: true,
      showLabel: false,
      animationEnabled: false,
      iconStyle: {
        width: 45,
        height: 45
      }
    }
  })

  class MiddleTabIcon extends Component{
    render(){
      return(
        <View style={styles.iconTabMiddleContainer}>
          <Image
            source={require('../../assets/img/icons/ic-plus-white-64dp.png')}
            style={[styles.iconTabMiddle, { tintColor: 'white' }]}
          />
        </View>
      )
    }
  }