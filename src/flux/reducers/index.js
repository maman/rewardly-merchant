import { combineReducers } from 'redux'
import auth from './auth'
import gifts from './gifts'
import members from './members'
import merchant from './merchant'
import dashboard from './dashboard'
import transactions from './transactions'

export default combineReducers({
  auth,
  gifts,
  members,
  merchant,
  dashboard,
  transactions
})
