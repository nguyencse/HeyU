import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native'
import styles from '../styles/Style'
import { NavigationActions } from 'react-navigation';

export default class Login extends Component {
  static navigationOptions = {
    header: null
  }

  // constructor(props) {
  //   super(props)
  //   backgroundLogin = require('../assets/img/background.png')
  // }

  onLogin = () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Main'})
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.background}>
          <View style={styles.logoContainer}>
            <Text style={styles.appName}>HeyU</Text>
            <Text style={styles.appDescription}>Free chat app</Text>
          </View>
          <View style={styles.loginForm}>
            <TextInput placeholder='joindoe@example.com' underlineColorAndroid={'rgba(0,0,0,0)'} style={styles.textInput} />
            <TextInput secureTextEntry={true} placeholder='•••••••••••••••••••••••' underlineColorAndroid={'rgba(0,0,0,0)'} style={styles.textInput} />
            <TouchableOpacity onPress={this.onLogin} style={styles.button}>
              <Text style={styles.buttonText}>SIGN IN</Text>
            </TouchableOpacity>
            <Text style={styles.textSignIn}>Have not any account yet? Sign up</Text>
          </View>
        </View>
      </View>
    )
  }
}