import {
  //generateUID,
  _getUsers,
  _getUser,
  _getQuestions,
  _saveQuestion,
  //_saveQuestionVote

} from './_DATA.js'

export function getInitialData () {
  return Promise.all([

    _getUsers(),
    _getQuestions(),
    //_saveQuestionVote(),

  ]).then(([users, questions]) => ({
    users,
    questions,

  }))
}

export function saveQuestion (info) {
  return _saveQuestion(info)
}
