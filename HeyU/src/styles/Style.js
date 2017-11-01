import { StyleSheet, Platform } from 'react-native'
import colors from '../colors/Color'

export default styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 1,
    justifyContent: 'center',
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
  },
  profileHeader: {
    flex: 1.5,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30
  },
  profileAvatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 100,
    overflow: 'hidden'
  },
  profileAvatar:{
    width: 80,
    height: 80,
    resizeMode: 'cover',
    ...Platform.select({
      android: {
        borderRadius: 100
      }
    })
  },
  profileName:{
    marginTop: 10,
    fontSize: 16,
    color: colors.white,
    fontWeight: 'bold'
  },
  profileSummary: {
    marginTop: 10,
    color: colors.white,
    textAlign: 'center'
  },
  profileMenuContainer: {
    flex: 2.5
  },
  profileRow: {
    flex: 1,
    height: 52,
    backgroundColor: colors.white
  },
  profileRowContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10
  },
  profileRowLeftContent: {
    flex: 2,
    marginRight: 5,
    color: colors.black
  },
  profileRowMiddleContent: {
    flex: 4,
    textAlign: 'right',
    marginLeft: 5,
    marginRight: 5,
    color: colors.grayDark
  },
  profileRowRightContent: {
    flex: 0.5,
    alignItems: 'flex-end',
    marginLeft: 5
  },
  icon12: {
    width: 12,
    height: 12,
    resizeMode: 'stretch'
  }
})