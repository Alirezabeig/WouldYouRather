import React, {Component} from 'react'
import {connect} from 'react-redux'

class home extends Component {

    render (){
        return (
            <div>
                This is home.
            </div>
        )
    }
}

function mapStateToProps ({questions}) {
    return {
        questionIDs: Object.keys(questions)
        .sort((a,b)=>questions[b].timestamps - questions[a].timestamps)
    }
}

export default connect(mapStateToProps)(home) 