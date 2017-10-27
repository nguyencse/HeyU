import React, { Component } from 'react';
import Login from './src/components/Login'

export default class App extends Component {
  constructor(props) {
    super(props)
    backgroundLogin = require('./src/assets/img/background-login.png')
  }

  render() {
    return (
     <Login /> 
    )
  }
}
