import React, { Component } from 'react'

import {
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'

import styles from '../uitls/styles'
import { images } from '../uitls/assets'
import { NavigationActions } from 'react-navigation'
import Dimensions from 'Dimensions'
import colors from '../uitls/colors'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { signup } from '../actions'

const { width, height } = Dimensions.get('window')
const marginLeft = width * 0.1
const marginRight = marginLeft

class Login extends Component {

  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  componentWillUpdate(){
    if(this.props.authorized){
      this.props.navigation.navigate('Main')
    }
  }

  onLogin = () => {
    let { email, password } = this.state
    this.props.signup({ email, password })
  }

  onChangeEmail = (value) => {
    this.setState({ email: value })
  }

  onChangePass = (value) => {
    this.setState({ password: value })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Image source={images.backgroundLogin.uri} style={currStyle.background} />
        <View style={currStyle.overlay}>
          <View style={currStyle.infoContainer}>
            <View style={currStyle.rowContainer}>
              <Icon name="account-circle" size={32} color="#fff" style={currStyle.iconsStyle} />
              <TextInput onChangeText={this.onChangeEmail} keyboardType='email-address' style={currStyle.textInputStyle} autoComplete="false" autoCorrect={false} underlineColorAndroid={'transparent'} placeholder='Email' placeholderTextColor={colors.white} />
            </View>
            <View style={currStyle.line} />
            <View style={currStyle.rowContainer}>
              <Icon name="lock-outline" size={32} color="#fff" style={currStyle.iconsStyle} />
              <TextInput onChangeText={this.onChangePass} secureTextEntry={true} style={currStyle.textInputStyle} autoComplete="false" autoCorrect={false} underlineColorAndroid={'transparent'} placeholder='Password' placeholderTextColor={colors.white} />
            </View>
          </View>
        </View>

        {
          this.props.errorMsg ? <Text style={currStyle.errorText}>{this.props.errorMsg.replace('.', '').toUpperCase()}</Text> : null
        }

        {
          this.props.authorizing ? <ActivityIndicator color={colors.white} size='large' style={[currStyle.button, { backgroundColor: colors.transparent }]} /> :
            <TouchableOpacity onPress={this.onLogin} style={currStyle.button}>
              <Text style={currStyle.buttonText}>LOGIN</Text>
            </TouchableOpacity>
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  authorized: state.user.authorized,
  authorizing: state.user.authorizing,
  errorMsg: state.user.loginErrorMsg
})

const mapDispatchToProps = (dispatch) => ({
  signup: (info) => dispatch(signup(info))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)

const currStyle = StyleSheet.create({
  background: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  overlay: {
    position: 'absolute',
    top: height * 0.4
  },
  infoContainer: {
    width: width * 0.8,
    height: height * 0.20,
    marginLeft: width * 0.1,
    marginRight: width * 0.1,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: colors.blueLite,
    backgroundColor: colors.blueDark,
    opacity: 0.5,
    padding: 10,
    justifyContent: 'center'
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  line: {
    borderBottomColor: colors.blueLite,
    borderBottomWidth: 1,
    marginLeft: width * 0.12,
    marginRight: width * 0.12
  },
  iconsStyle: {
    marginRight: 10
  },
  textInputStyle: {
    flex: 1,
    color: colors.white
  },
  button: {
    position: 'absolute',
    bottom: height * 0.2,
    backgroundColor: 'white',
    height: height * 0.08,
    width: width * 0.8,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft,
    marginRight
  },
  buttonText: {
    color: colors.blueMedium
  },
  errorText: {
    position: 'absolute',
    bottom: height * 0.33,
    color: colors.white,
    backgroundColor: 'transparent',
    alignSelf: 'center',
    textAlign: 'center',
    marginLeft,
    marginRight
  }
})