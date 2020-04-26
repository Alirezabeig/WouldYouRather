import React, {Component} from 'react'
import {connect} from 'react-redux'
import './css/question.css'
//import { saveQuestionVote } from './actions/Questions'
import {Link} from 'react-router-dom' 

class Details extends Component {
    
    handleVote = answerObj => {
        const { dispatch } = this.props
        //dispatch(saveQuestionVote(answerObj))
      }

    render (){
        const { question, user, question_id } = this.props
        const {id} = question

        console.log(this.props)
        return (
            
            <div>
                <div className="question" >
                <div className="question-title"> 
                    <img src={user.avatarURL} alt="avatar!" className="avatar" />
                    {user.name}
                    
                <div className="question-body">
                    <p>Would You Rather?</p>
                    <p>Option A: {question.optionOne.text}</p>
                    <button
                        className="vote-btn"
                        onClick={() =>
                        this.handleVote({
                            
                            qid: question.id,
                            answer: 'optionOne'
                        })
                        }
                    >
                        Choose this
                    </button>


                    <p>Option B: {question.optionTwo.text}</p>
                </div>

                </div>
                </div>
            </div>
                        
           
        )
    }
}
function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id]
  const question_id = question.id
  const user = users[question.author]

  return {
    question,
    question_id,
    user
  }
}

  

export default connect(mapStateToProps)(Details)