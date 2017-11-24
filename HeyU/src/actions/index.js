import * as constants from '../uitls/Constants'
import firebase from 'firebase'

export const login = (info) => {
  return (dispatch) => {
    dispatch(startLogin())

    let { email, password } = info

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        let { email, metadata } = firebase.auth().currentUser
        let user = {
          email,
          creationTime: metadata.a,
          lastSignInTime: metadata.b
        }

        dispatch(setUserInfo(user))
        dispatch(stopLogin())
      })
      .catch((error) => {
        dispatch(setErrorMessage(error))
        dispatch(stopLogin())
      })
  }
}

export const startLogin = () => ({ type: constants.ACTION_LOGIN_START })

export const stopLogin = () => ({ type: constants.ACTION_LOGIN_STOP })

export const setUserInfo = (user) => ({
  type: constants.ACTION_LOGIN_SET_USER,
  user
})

export const setErrorMessage = (error) => ({
  type: constants.ACTION_LOGIN_SET_ERROR_MSG,
  errorMsg: error.message
})