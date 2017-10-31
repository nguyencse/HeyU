import { StyleSheet, Platform } from 'react-native'
import colors from '../colors/Color'

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
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
    color: colors.white,
    fontSize: 60,
    fontWeight: 'bold'
  },
  appDescription: {
    color: colors.white
  },
  textInput: {
    backgroundColor: colors.transparent,
    borderWidth: 1,
    borderColor: colors.white,
    color: colors.white,
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
    resizeMode: 'contain',
    width: 20,
    height: 20
  },
  iconTabMiddleContainer: {
    borderRadius: 100,
    width: 45,
    height: 45,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
    position: 'absolute'
  },
  iconTabMiddle:{
    flex: 1,
    resizeMode: 'contain',
    width: 20,
    height: 20,
    zIndex: 1
  },
  messageRow: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: colors.white
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
    borderWidth: 1,
    borderColor: colors.grayLite,
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
    backgroundColor: colors.white,
    height: 52,
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.grayLite
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
    color: colors.primary,
    fontSize: 14,
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
    resizeMode: 'contain',
    tintColor: colors.primary
  }
})