//This file shows the details of a question when clicked

import React, {Component} from 'react'
import Question from './Question'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Details from './QuestionDetails'
//import Details from './TakeVote'
import { Router, Route, browserHistory } from 'react-router';


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
////*<Route path="/question/:question_id" component={Details}/>*//s

function mapStateToProps({ questions }, {match}){
    const {id} = match.params
    
    return {
    
      id,
    }


}

export default connect(mapStateToProps)(More)