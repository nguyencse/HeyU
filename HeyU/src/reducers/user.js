import * as constants from '../uitls/Constants'

const initialState = {
  displayName: null,
  email: null,
  phoneNumber: null,
  photoURL: null,
  creationTime: null,
  lastSignInTime: null,
  authorizing: false,
  authorized: false,
  loginErrorMsg: null
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case constants.ACTION_LOGIN_START:
      return {
        ...state,
        authorizing: true
      }
    case constants.ACTION_LOGIN_STOP:
      return {
        ...state,
        authorizing: false
      }
    case constants.ACTION_LOGIN_SET_USER:
      let { email, creationTime, lastSignInTime } = action.user
      return {
        ...state,
        email,
        creationTime,
        lastSignInTime,
        authorized: true,
        loginErrorMsg: null
      }
    case constants.ACTION_LOGIN_SET_ERROR_MSG:
      return {
        ...state,
        authorizing: false,
        loginErrorMsg: action.errorMsg
      }
    default: return state
  }
}

export default user