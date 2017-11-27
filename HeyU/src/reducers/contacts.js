import * as constants from '../uitls/constants'

const initialState = []

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case constants.ACTION_FETCH_CONTACTS:
      alert(action.contacts)
      return [...initialState, action.contacts]
    default: return [...initialState]
  }
}

export default contacts