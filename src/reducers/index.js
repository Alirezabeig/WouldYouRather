import { combineReducers} from 'redux'
import authedUser from './authedUsers'
import users from './users'
import questions from './Questions'

export default combineReducers ({
  authedUser,
  users,
  questions
})
