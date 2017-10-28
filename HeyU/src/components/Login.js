import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native'
import styles from '../styles/Style'

export default class Login extends Component {
  constructor(props) {
    super(props)
    backgroundLogin = require('../assets/img/background-login.png')
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Image source={backgroundLogin} style={styles.background}>
          <View style={styles.logoContainer}>
            <Text style={styles.appName}>HeyU</Text>
            <Text style={styles.appDescription}>Free chat app</Text>
          </View>
          <View style={styles.loginForm}>
            <TextInput placeholder='joindoe@example.com' underlineColorAndroid={'rgba(0,0,0,0)'} style={styles.textInput}/>
            <TextInput secureTextEntry={true} placeholder='•••••••••••••••••••••••' underlineColorAndroid={'rgba(0,0,0,0)'} style={styles.textInput}/>
            <TouchableOpacity>
              <Text style={styles.button}>SIGN UP</Text>
            </TouchableOpacity>
            <Text style={styles.textSignIn}>Already have an account? Sign in</Text>
          </View>
        </Image>
      </View>
    )
  }
}