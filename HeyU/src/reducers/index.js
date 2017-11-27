import { combineReducers } from 'redux'

import chatroom from './chatroom'
import user from './user'
import contacts from './contacts'

export default reducer = combineReducers({
    user,
    contacts,
    chatroom
})