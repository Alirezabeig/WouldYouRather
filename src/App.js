import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/Shared'
import Home from './Home'
import LoadingBar from 'react-redux-loading-bar'
import NewQuestion from './NewQuestion'
import QuestionMore from './QuestionMore'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
      render() {

        return (
          
          <div>
          <LoadingBar/>
            {this.props.loading ===true
            ? null
            :<QuestionMore match={{params: {id:'xj352vofupe1dqz9emx13r'}}}/>

            }
          
          App
          </div>
          )
        }
  }
function mapStateToProps({authedUser}) { 
  return {
    loading: authedUser===null
  }
}


export default connect(mapStateToProps)(App)