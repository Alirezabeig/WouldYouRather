import {getInitialData} from '../utils/api'
import {ReceiveUsers} from './users'
import {ReceiveQuestions} from './Questions'
import {setAuthedUser} from './authedUsers'
import {showLoading, hideLoading} from 'react-redux-loading'

//const AUTHED_ID= 'tylermcginnis'

export function handleInitialData (userId) {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({users , questions}) => {
        dispatch(ReceiveUsers(users))
        dispatch(ReceiveQuestions(questions))
        //dispatch(setAuthedUser(AUTHED_ID))
        dispatch(setAuthedUser(userId ? userId : 'tylermcginnis'))
        dispatch(hideLoading())  

    })
    

  }
}
