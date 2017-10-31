import { StyleSheet, Platform } from 'react-native'
import colors from '../colors/Color'

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 1,
    backgroundColor: colors.primary
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
    color: colors.white,
    fontSize: 60,
    fontWeight: 'bold'
  },
  appDescription: {
    color: colors.white
  },
  textInput: {
    backgroundColor: colors.white,
    borderColor: colors.red,
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 30,
    textAlign: 'center',
    height: 52
  },
  button: {
    backgroundColor: colors.white,
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
    color: colors.primary,
    fontWeight: 'bold',
    overflow: 'hidden'
  },
  textSignIn: {
    color: colors.white,
    textAlign: 'center',
    marginTop: 10
  },
  iconTab: {
    flex: 1,
    resizeMode: 'contain'
  },
  messageRow: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10
  },
  messageAvatarContainer: {
    width: 52,
    height: 52,
    borderRadius: 100,
    overflow: 'hidden',
    marginLeft: 10,
    marginRight: 10
  },
  messageAvatar: {
    width: 52,
    height: 52,
    ...Platform.select({
      android: {borderRadius: 100}
    })
  },
  messageSummary: {
    flex: 4.5,
    justifyContent: 'center'
  },
  messageAuthor:{
    fontSize: 14,
    color: colors.black
  },
  messageBegin: {
    color: 'gray'
  },
  messageTimeContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  messageTime: {
    fontSize: 10
  },
  toolbar: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    height: 52,
    alignItems: 'center',
    padding: 10
  },
  toolbarButtonLeft: {
    flex: 1,
    alignItems: 'flex-start'
  },
  toolbarButtonRight: {
    flex: 1,
    alignItems: 'flex-end'
  },
  toolbarTitle: {
    flex: 4,
    flexDirection: 'row',
    textAlign: 'center',
    color: colors.black
  },
  toolbarButtonTextLeft: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  toolbarButtonTextRight: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'right'
  },
  toolbarButtonImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  }
})