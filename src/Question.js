import React, {Component} from 'react'
import {formatQuestion} from './utils/helpers'
import {connect} from 'react-redux'

class Question extends Component {
    
    render (){
        console.log(this.props)
        return (
            <div>
                
            </div>
        )
    }
}
function mapStateToProps ({authedUser, users, questions}, { id }) {
    const question = questions[id]
    return {
      authedUser,
      question: formatQuestion(question, users[question.author], authedUser)
        
    }
  }
  

export default connect(mapStateToProps)(Question)