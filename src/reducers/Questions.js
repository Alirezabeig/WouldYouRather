import { RECEIVE_QUESTIONS, ADD_QUESTION, SAVE_VOTE} from '../actions/Questions'

export default function questions( state=[], action){
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }

      case ADD_QUESTION :
        const { question } = action
        return {
          ...state,
          [action.question.id]: action.question,
      }

      //case SAVE_VOTE :
      //return {
       // ...state,
       // [action.id]: {
         // ...state[action.id],
          //votes: action.votes === true
          //? state[action.id].votes.filter((uid) => uid !== action.authedUser)
           // : state[action.id].votes.concat([action.authedUser])
        //}
     // }



    default:
      return state
  }
}
