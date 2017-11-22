import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  StatusBar,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import styles from '../uitls/Style'
import { images } from '../uitls/Assets'
import { NavigationActions } from 'react-navigation'
import Dimensions from 'Dimensions'
import colors from '../uitls/Color'
import Icon from 'react-native-vector-icons/MaterialIcons'

const { width, height } = Dimensions.get('window')
const marginLeft = width * 0.1
const marginRight = marginLeft

export default class Login extends Component {
  static navigationOptions = {
    header: null
  }

  onLogin = () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Main' })
      ]
    })
    this.props.navigation.dispatch(resetAction)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Image source={images.backgroundLogin.uri} style={currStyle.background} />
        <View style={currStyle.overlay}>
          <View style={currStyle.infoContainer}>
            <View style={currStyle.rowContainer}>
              <Icon name="account-circle" size={32} color="#fff" style={currStyle.iconsStyle}/>
              <TextInput style={currStyle.textInputStyle} autoComplete="false" autoCorrect={false} underlineColorAndroid={'transparent'} placeholder='Username' placeholderTextColor={colors.white}/>
            </View>
            <View style={currStyle.line} />
            <View style={currStyle.rowContainer}>
              <Icon name="lock-outline" size={32} color="#fff" style={currStyle.iconsStyle}/>
              <TextInput style={currStyle.textInputStyle} autoComplete="false" autoCorrect={false} underlineColorAndroid={'transparent'} placeholder='Password' placeholderTextColor={colors.white}/>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

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
    flex: 1
  }
})