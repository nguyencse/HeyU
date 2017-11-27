import * as constants from '../uitls/constants'
import firebase from 'firebase'

// AUTHENTICATION
export const signup = (info) => {
  return (dispatch) => {
    dispatch(startAuthenticating())

    let { email, password } = info

    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {

        let { uid, displayName, email, phoneNumber, photoURL, metadata } = firebase.auth().currentUser

        let user = {
          uid,
          displayName,
          email,
          phoneNumber,
          photoURL,
          creationTime: metadata.a,
          lastSignInTime: metadata.b
        }

        dispatch(setUserInfo(user))
        dispatch(addUserToDB(user))
        dispatch(stopAuthenticating())
      })
      .catch((error) => {
        dispatch(setErrorMessage(error))
        dispatch(stopAuthenticating())
      })
  }
}

export const login = (info) => {
  return (dispatch) => {
    dispatch(startAuthenticating())

    let { email, password } = info

    firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {

        let { email, metadata } = firebase.auth().currentUser
        let user = {
          email,
          creationTime: metadata.a,
          lastSignInTime: metadata.b
        }

        dispatch(setUserInfo(user))
        dispatch(stopAuthenticating())
      })
      .catch((error) => {
        dispatch(setErrorMessage(error))
        dispatch(stopAuthenticating())
      })
  }
}

export const startAuthenticating = () => ({ type: constants.ACTION_LOGIN_START })

export const stopAuthenticating = () => ({ type: constants.ACTION_LOGIN_STOP })

export const setUserInfo = (user) => ({
  type: constants.ACTION_LOGIN_SET_USER,
  user
})

export const setErrorMessage = (error) => ({
  type: constants.ACTION_LOGIN_SET_ERROR_MSG,
  errorMsg: error.message
})

export const addUserToDB = (user) => {
  return () => {
    firebase.database().ref('/users/' + user.uid).set({
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      creationTime: user.creationTime,
      lastSignInTime: user.lastSignInTime
    })
  }
}


// CONTACTS
export const fetchContacts = (contacts) => {
  return (dispatch) => {

    let ref = firebase.database().ref('users')
    let contacts = []

    ref.once('value', (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        let uid = childSnapshot.key
        let contact = childSnapshot.val()
        alert(contact.uid)
        contacts.push(contact)
      })
    })

    return {
      type: constants.ACTION_FETCH_CONTACTS,
      contacts
    }
  }
}