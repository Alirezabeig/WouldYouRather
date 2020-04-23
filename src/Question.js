import React, {Component} from 'react'
import {connect} from 'react-redux'
import './css/question.css' 

class Question extends Component {
    
    render (){
        const { question, user } = this.props

        console.log(this.props)
        return (
            <div>
                <div className="question">
                <div className="question-title"> 
                    <img src={user.avatarURL} alt="avatar!" className="avatar" />
                    {user.name}
                    
                <div className="question-body">
                    <p>Would You Rather?</p>
                    <p>A: {question.optionOne.text}</p>
                    <p>B: {question.optionTwo.text}</p>
                </div>

                </div>
                </div>
                        
           </div>
        )
    }
}
function mapStateToProps ({ users, questions}, { id }) {
    const question = questions[id]
    const question_id=question.id
    const user = users[question.author]

    return {
      question, 
      question_id,
      user
    }
  }


  

export default connect(mapStateToProps)(Question)