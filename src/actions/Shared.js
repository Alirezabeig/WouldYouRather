import {getInitialData} from '../utils/api'
import { ReceiveUsers} from './users'
import {ReceiveQuestions} from './Questions'
import {setAuthedUser} from './authedUsers'

const AUTHED_ID= 'sarahedo'


export function handleInitialData(){
  return (dipatch) => {
    return getInitialData()
    .then(({users,questions}) => {
        dispatch(ReceiveUsers(users)),
        dispatch(ReceiveQuestions(questions)),
        dispatch(setAuthedUser(AUTHED_ID))

    })

  }
}
