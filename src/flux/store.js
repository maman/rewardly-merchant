import Revue from 'revue'
import vue from 'vue'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from 'flux/reducers'

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore)

const reduxStore = createStoreWithMiddleware(reducers)

const store = new Revue(vue, reduxStore)

export default store
