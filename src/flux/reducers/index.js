import { combineReducers } from 'redux'
import auth from './auth'
import gifts from './gifts'
import members from './members'
import settings from './settings'
import transactions from './transactions'

export default combineReducers({
  auth,
  gifts,
  members,
  settings,
  transactions
})
