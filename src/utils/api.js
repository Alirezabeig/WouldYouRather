import {
  //generateUID,
  _getUsers,
  _getUser,
  _saveQuestion,
  _getQuestions,
  
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([

    _getUsers(),
    _getQuestions(),
    

  ]).then(([users, questions]) => ({
    users,
    questions,
    
  

  }))
}

export function saveQuestion (info) {
  return _saveQuestion(info)
}

export function getQuestions() {
    return _getQuestions();
}
