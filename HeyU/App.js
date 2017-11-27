import React, { Component } from 'react'

import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import { StackNavigator } from 'react-navigation'
import Login from './src/containers/Login'
import Main from './src/containers/Main'
import reducer from './src/reducers'
import firebase from 'firebase'
import * as configs from './src/configs'

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware)
)

const FireWall = connect(
  (state) => ({
    authorized: state.user.authorized
  })
)(({ authorized }) => {
  if (authorized) {
    return (<Main />)
  } else {
    return (<Main />)
  }
})

class App extends Component {
  componentWillMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(configs.firebaseConfig)
    }
  }

  render() {
    return (
      <Provider store={store}>
        <FireWall />
      </Provider>
    )
  }
}
export default App