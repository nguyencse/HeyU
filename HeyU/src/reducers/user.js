import * as constants from '../uitls/Constants'

const initialState = {
  name: null,
  avatar: 'https://goo.gl/jWaoQ5',
  authorized: false,
  authorizing: false
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case constants.ACTION_LOGIN:
      return {
        ...state,
        name: action.user.name
      }
    default: return state
  }
}

export default user