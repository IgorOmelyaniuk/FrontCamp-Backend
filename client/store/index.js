import { createStore, applyMiddleware  } from 'redux'
import rootReducer from '../reducers'
import promise from 'redux-promise'
import thunk from 'redux-thunk'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(rootReducer)

export default store;