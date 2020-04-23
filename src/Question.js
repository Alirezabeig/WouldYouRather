import React, {Component} from 'react'
import {formatQuestion} from './utils/helpers'
import {connect} from 'react-redux'

class Question extends Component {
    
    render (){
        const { question, user } = this.props

        console.log(this.props)
        return (
            <div>

                <img src={user.avatarURL} alt="avatar!" />
                {user.name}
                
                <p>Would You Rather?</p>
                <p>A: {question.optionOne.text}</p>
                <p>B: {question.optionTwo.text}</p>
                   
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