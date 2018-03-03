import { createStore, applyMiddleware  } from 'redux'
import rootReducer from '../reducers'
import promise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const store = createStoreWithMiddleware(rootReducer)

export default store;