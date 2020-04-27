import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question';
import './css/home.css'
import { createSelector } from 'reselect'

class home extends Component {

  state = {
    Type: 'Unanswered Questions'
  }

  handleToggleType = e => {
    const Type = e.target.value

    this.setState(() => ({
      Type
    }))
  }

    render (){
        const {Type}= this.state
        const {answeredQuestions, unansweredQuestions} = this.props

        return (

          // onChange toggle the Type
          // if type is unanswered and if type is answered  
            <div >
          
          <select onChange={this.handleToggleType}>
            <option value="Unanswered Questions">Unanswered Questions</option>
            <option value="Answered Questions">Answered Questions</option>
          </select>
              
        
          {Type === 'Unanswered Questions' && (
          <ul >
            {unansweredQuestions.map(id => (
              <li key={id} >
                <Question id={id} />
              </li>
            ))}
          </ul>
        )}

        {Type === 'Answered Questions' && (
          <ul>
            {answeredQuestions.map(id => (
              <li key={id} >
                <Question id={id} />
              </li>
            ))}
          </ul>
        )}


        
          
          
      </div>
        )
    }
}

const ReceiveAnsweredQuestion = createSelector(
  state => state.questions,
  state => Object.keys(state.users[state.authedUser].answers),
  (questions, answers) =>
    answers.sort((a, b) => questions[b].timestamp - questions[a].timestamp)
)

const ReceiveUnansweredQuestion = createSelector(
  state => state.questions,
  state => Object.keys(state.users[state.authedUser].answers),
  state => Object.keys(state.questions),
  (questions, answeredQuestions, questionsId) =>
    questionsId
      .filter(id => !answeredQuestions.includes(id))
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
)




function mapStateToProps(state) {
   const {users, questions}=state
    return {
      users,
      questions,

      answeredQuestions: ReceiveAnsweredQuestion(state),
      unansweredQuestions: ReceiveUnansweredQuestion(state)

    }
}

export default connect(mapStateToProps)(home) 



