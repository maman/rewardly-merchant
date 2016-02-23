import vue from 'vue'
import Revue from 'revue'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from './flux/reducers'
import * as actions from './flux/actions'

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)

const reduxStore = createStoreWithMiddleware(reducers)

const store = new Revue(vue, reduxStore, actions)

export default store
