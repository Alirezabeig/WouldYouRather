import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/Shared'
import Home from './Home'
import LoadingBar from 'react-redux-loading-bar'
import NewQuestion from './NewQuestion'

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
            : <NewQuestion/>}
          
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