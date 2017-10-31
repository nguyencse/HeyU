import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'
import Login from './src/components/screens/Login'
import Main from './src/components/screens/Main'

export default App = StackNavigator({
  Login: {
    screen: Login
  },
  Main: {
    screen: Main
  }
})