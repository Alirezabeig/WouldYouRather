import React, {Component} from 'react'
import {connect} from 'react-redux'

class home extends Component {

    render (){
        console.log(this.props)
        return (
            <div>

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