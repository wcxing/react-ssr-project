import Login from './login.js'

import React from 'react'
import ReactDom from 'react-dom'
// import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from '../redux/store'

const Index = () => (
  <Provider store={store}>
    <Login />
  </Provider>
)

export default Index
