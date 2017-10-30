import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'
import Login from './src/components/Login'
import Main from './src/components/Main'

export default App = StackNavigator({
  Login: {
    screen: Login
  },
  Main: {
    screen: Main
  }
})