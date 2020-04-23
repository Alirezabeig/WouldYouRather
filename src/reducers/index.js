import { combineReducers} from 'redux'
import authedUser from './authedUsers'
import users from './users'
import questions from './Questions'
import {loadingBarReducer} from 'react-redux-loading'

export default combineReducers ({
  authedUser,
  users,
  questions,
  loadingBar: loadingBarReducer
})
