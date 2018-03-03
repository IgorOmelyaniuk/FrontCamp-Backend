import { combineReducers } from 'redux';
import BlogsReducer from './reducer_blogs';
import AuthorReducer from './reducer_author'
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  blogs: BlogsReducer,
  form: FormReducer,
  author: AuthorReducer
});

export default rootReducer;