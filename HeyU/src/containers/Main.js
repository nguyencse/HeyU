import React, { Component } from 'react'
import {
  View,
  Image
} from 'react-native'
import styles from '../uitls/styles'
import colors from '../uitls/colors'
import * as constants from '../uitls/constants'
import { icons } from '../uitls/assets'
import { TabNavigator } from 'react-navigation'
import Toolbar from '../components/Toolbar'
import Login from './Login'
import Messages from './Messages'
import Groups from './Groups'
import Adding from './Adding'
import Profile from './Profile'
import Contacts from './Contacts'

export default Main = TabNavigator({
  Messages: {
    screen: Messages,
    navigationOptions: {
      header: <Toolbar title={constants.TOOLBAR_TITLE_MESSAGES} />,
      tabBarLabel: 'Messages',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={icons.message.uri}
          style={[styles.iconTab, { tintColor: tintColor }]}
        />
      )
    }
  },
  Groups: {
    screen: Groups,
    navigationOptions: {
      header: <Toolbar title={constants.TOOLBAR_TITLE_GROUPS} />,
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={icons.user.uri}
          style={[styles.iconTab, { tintColor: tintColor }]}
        />
      )
    }
  },
  Adding: {
    screen: Adding,
    navigationOptions: {
      header: <Toolbar title={constants.TOOLBAR_TITLE_ADDING} />,
      tabBarLabel: 'Profile',
      tabBarIcon: () => (
        <MiddleTabIcon />
      )
    }
  },
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      header: <Toolbar title={constants.TOOLBAR_TITLE_CONTACTS} />,
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={icons.menu.uri}
          style={[styles.iconTab, { tintColor: tintColor }]}
        />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: <Toolbar title={constants.TOOLBAR_TITLE_PROFILE} />,
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={icons.user.uri}
          style={[styles.iconTab, { tintColor: tintColor }]}
        />
      )
    }
  }
}, {
    initialRouteName: 'Adding',
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

class MiddleTabIcon extends Component {
  render() {
    return (
      <View style={styles.iconTabMiddleContainer}>
        <Image
          source={icons.plus.uri}
          style={[styles.iconTabMiddle, { tintColor: 'white' }]}
        />
      </View>
    )
  }
}