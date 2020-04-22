import React, {Component} from 'react'
import {connect} from 'react-redux'

class home extends Component {
    render (){
        console.log(this.props)
        return (
            <div>
        
          {this.props.questionIds.map((id) => (
            <li key={id}>
              <div>TWEET ID: {id}</div>
            </li>
          ))}
        
      </div>
        )
    }
}

function mapStateToProps({questions}) {
    return {
        questionIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(home) 