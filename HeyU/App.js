import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'
import Login from './src/containers/Login'
import Main from './src/containers/Main'

export default App = StackNavigator({
  Login: {
    screen: Login
  },
  Main: {
    screen: Main
  }
})