import { RECEIVE_QUESTIONS} from '../actions/Questions'

export default function questions( state=[], action){
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.users
      }
    default:
      return state
  }

}
