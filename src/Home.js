import React, {Component} from 'react'
import {connect} from 'react-redux'
import Question from './Question';
import './css/home.css'

class home extends Component {
    render (){
        console.log(this.props)
        return (
            <div className="home">
        
          {this.props.questionIds.map((id) => (
            <li key={id}>
              <Question id={id}/>
            </li>
          ))}
          
      </div>
        )
    }
}
//<Question id={id}/>
function mapStateToProps({questions}) {
    return {
        questionIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(home) 