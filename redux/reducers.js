import { combineReducers } from 'redux'

import auth from './reducers/auth'
import menu from './reducers/menu'
import * as accounts from './reducers/accounts'
import notice from './reducers/notice'
import * as merchant from './reducers/merchant'
import settlement from './reducers/settlement'
import user from './reducers/user'
import userUpPass from './reducers/userUpPass'
import * as transactQuery from './reducers/transactQuery'



export default combineReducers({
  auth,
  menu,
  ...accounts,
  ...merchant,
  notice,
  ...transactQuery,
  settlement,
  user,
  userUpPass
})
