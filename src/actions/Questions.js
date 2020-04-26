
import {saveQuestion} from '../utils/api'
import {saveQuestionVote} from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'
import { handleInitialData } from './Shared'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'


export function AddQuestion (question){ 
  return { 
    type: ADD_QUESTION ,
    question
  }
}

export function handleAddQuestion (info){
  console.log('Option_Input: ', info)  
  return dispatch => {
    dispatch(showLoading())

    return saveQuestion({
      ...info,
      author: info.authedUser
    })
      .then(res => dispatch(handleInitialData(res.author)))
      .then(() => dispatch(hideLoading()))
  }
}

export function ReceiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function handleSaveVote(voteObj) {
  return dispatch => {
    dispatch(showLoading())

    return saveQuestionVote({
      ...voteObj
    })
      .then(() => dispatch(handleInitialData(voteObj.authedUser)))
      .then(() => dispatch(hideLoading()))
  }
}

