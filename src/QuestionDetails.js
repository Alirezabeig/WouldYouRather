import React, {Component} from 'react'
import {connect} from 'react-redux'
import './css/question.css'
import { handleSaveQuestionVote } from './actions/Questions'
import {Link} from 'react-router-dom' 

class Details extends Component {
    
    handleVote = voteObj => {
        const { dispatch } = this.props
        dispatch(handleSaveQuestionVote(voteObj))
      }

    render (){


    const { question, user, question_id, authedUser, questionAnswer,} = this.props
    const {id} = question

      const optionOneNumber = question.optionOne.votes.length
      const optionTwoNumber = question.optionTwo.votes.length
      const totallVotes = optionOneNumber + optionTwoNumber
  
      const optionOnePercentage = parseInt((optionOneNumber / totallVotes) * 100, 10)
      const optionTwoPercentage = parseInt((optionTwoNumber / totallVotes) * 100, 10)

        console.log(this.props)
        

        if (questionAnswer === undefined) {
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
                                authedUser,
                                qid: question.id,
                                answer: 'optionOne'
                            })
                            }
                        >
                            Choose this
                        </button>
    
    
    
    
                        <p>Option B: {question.optionTwo.text}</p>
                        <button
                            className="vote-btn"
                            onClick={e =>
                            this.handleVote({
                                authedUser,
                                qid: question.id,
                                answer: 'optionTwo'
                            })
                            }
                        >
                            Choose this
                        </button>
                    </div>
    
                    </div>
                    </div>

                </div>
            )}   

            else {      
                return (          
                        
                <div>

                        

                    <div className="question" >
                    <div className="question-title"> 
                        <img src={user.avatarURL} alt="avatar!" className="avatar" />
                        {user.name}
                        
                    <div className="question-body">
                        <p>Would You Rather?</p>
                        <p>Option A: {question.optionOne.text}</p>

                        <p>Option B: {question.optionTwo.text}</p>
                        
                    </div>
    
                    </div>
                    </div>







                    <hr />
                        <h4>All the votes on this question to this date:</h4>
                        <p>
                            A: {question.optionOne.text} | {optionOneNumber} votes (
                            {optionOnePercentage}
                            %)
                        </p>
                        <p>
                            B: {question.optionTwo.text} | {optionTwoNumber} votes (
                            {optionTwoPercentage}
                            %)
                        </p>
                            <p>the number of totall votes on this question:{totallVotes}</p>
                
                </div>
        

)            }
                        
           
        
    }
}

function mapStateToProps({ questions, users,authedUser }, { id }) {
  const question = questions[id]
  const question_id = question.id
  const user = users[question.author]
  const questionAnswer = users[authedUser].answers[id]


  return {
    question,
    question_id,
    authedUser,
    questionAnswer,
    user
  }
}

  

export default connect(mapStateToProps)(Details)