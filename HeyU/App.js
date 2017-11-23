import React, { Component } from 'react'

import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import { StackNavigator } from 'react-navigation'
import Login from './src/containers/Login'
import Main from './src/containers/Main'
import reducer from './src/reducers'

const store = createStore(reducer)

// export default App = StackNavigator({
//   Login: {
//     screen: Login
//   },
//   Main: {
//     screen: Main
//   }
// })

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    )
  }
}
export default App