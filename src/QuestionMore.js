//This file shows the details of a question when clicked

import React, {Component} from 'react'
import Question from './Question'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Details from './QuestionDetails'

class More extends Component {

    render (){
        const {id} = this.props
        return (

            <div>
                <Details id={id}/>
            </div>
        
        )
    }
}

function mapStateToProps({ questions }, {match}){
    const {id} = match.params
    
    return {
    
      id,
    }


}

export default connect(mapStateToProps)(More)