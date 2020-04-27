import {getInitialData} from '../utils/api'
import {ReceiveUsers} from './users'
import {ReceiveQuestions} from './Questions'
import {setAuthedUser} from './authedUsers'
import {showLoading, hideLoading} from 'react-redux-loading'

const AUTHED_ID= 'tylermcginnis'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({users , questions, authedUser}) => {
        dispatch(ReceiveUsers(users))
        dispatch(ReceiveQuestions(questions))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())  

    })
    

  }
}
