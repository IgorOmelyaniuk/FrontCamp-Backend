import { combineReducers } from 'redux'
import BlogsReducer from './reducer_blogs'
import { reducer as FormReducer } from 'redux-form'

const rootReducer = combineReducers({
  blogs: BlogsReducer,
  form: FormReducer
});

export default rootReducer;