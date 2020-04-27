import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import './css/index.css' 

class Question extends Component {
    
    render (){
        const { question, user, question_id } = this.props
        const {id} = question

        console.log(this.props)
        return (
            <Link to={`/question/${id}`} className="question">
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
            </div>
                        
           </Link>
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

  

export default connect(mapStateToProps)(Question)