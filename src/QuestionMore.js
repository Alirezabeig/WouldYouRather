//This file shows the details of a question when clicked

import React, {Component} from 'react'
import Question from './Question'
import NewQuestion from './NewQuestion'
import {connect} from 'react-redux'

class More extends Component {

    render (){
        const {id} = this.props
        return (

        <div>
        <Question id={id} />
        </div>
        )
    }
}

function mapStateToPropss ({ questions }, {match}){
    const {id} = match.params
    
    return {
    
      id,
    }


}

export default connect(mapStateToPropss)(More)