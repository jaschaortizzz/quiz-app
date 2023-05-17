import { combineReducers } from 'redux';
import user from './userReducer'
import loading from './loadingReducer'
import errors from './errorReducer'
import questions from './questionReducer'

export default combineReducers({
  user,
  loading,
  errors,
  questions,
});