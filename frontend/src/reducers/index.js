import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import blogReducer from './blogReducer';
import orgReducer from './orgReducer';

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  blogs: blogReducer,
  orgs: orgReducer,
});
