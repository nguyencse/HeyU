import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 1,
    backgroundColor: '#008530'
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginForm: {
    flex: 2
  },
  appName: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold'
  },
  appDescription: {
    color: 'white'
  },
  textInput: {
    backgroundColor: 'white',
    borderColor: 'red',
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 30,
    textAlign: 'center'
  },
  button: {
    backgroundColor: 'white',
    height: 51,
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#008530',
    fontWeight: 'bold'
  },
  textSignIn: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10
  },
  iconTab: {
    width: 48,
    height: 48,
    resizeMode: 'stretch'
  }
})