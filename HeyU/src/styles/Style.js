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
    textAlign: 'center',
    height: 52
  },
  button: {
    backgroundColor: 'white',
    marginTop: 20,
    height: 52,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 26,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    textAlign: 'center',
    color: '#008530',
    fontWeight: 'bold',
    overflow: 'hidden'
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