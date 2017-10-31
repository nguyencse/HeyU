import React, { Component } from 'react'
import {
  View,
  Image
} from 'react-native'
import styles from '../styles/Style'
import colors from '../colors/Color'
import { TabNavigator } from 'react-navigation'
import Toolbar from '../components/Toolbar'
import Login from '../components/Login'
import Messages from '../components/Messages'
import Contacts from '../components/Contacts'
import Profile from '../components/Profile'

export default Main = TabNavigator({
  Messages: {
    screen: Messages,
    navigationOptions: {
      header: <Toolbar title='Messages' />,
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
      header: <Toolbar title='Contacts' />,
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../assets/img/icons/ic-users-green-64dp.png')}
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
      tabBarIcon: ({ tintColor }) => (
        <MiddleTabIcon tintColor={tintColor}/>
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
          source={require('../assets/img/icons/ic-user-green-64dp.png')}
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
          source={require('../assets/img/icons/ic-user-green-64dp.png')}
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
      activeTintColor: colors.black,
      style: {
        backgroundColor: colors.white
      },
      indicatorStyle: {
        backgroundColor: colors.white
      },
      showIcon: true,
      showLabel: false
    }
  })


  class MiddleTabIcon extends Component{
    render(){
      return(
        <View style={styles.iconTabMiddleContainer}>
          <Image
            source={require('../assets/img/icons/ic-plus-white-64dp.png')}
            style={[styles.iconTabMiddle, { tintColor: this.props.tintColor }]}
          />
        </View>
      )
    }
  }