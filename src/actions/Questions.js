
import {saveQuestion} from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'


export function AddQuestion (question){ 
  return { 
    type: ADD_QUESTION ,
    question
  }
}

export function handleAddQuestion ( text){
  return (dispatch, getState) => {
    const {authedUser} = getState()
    dispatch(showLoading)

    return saveQuestion ({
      text,
    })
    .then((question) => dispatch(AddQuestion(question)))
    .then(() =>  dispatch(hideLoading()))
  }
}





export function ReceiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}
