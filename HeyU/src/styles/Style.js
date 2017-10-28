import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'stretch'
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
    backgroundColor: '#9C1727',
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
    color: '#9C1727'
  },
  textSignIn: {
    color: 'white',
    textAlign: 'center',
    marginTop: 10
  }
})