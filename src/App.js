import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/Shared'
import Home from './Home'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
      render() {
        return (
          <div>
            {this.props.loading ===true
            ? null
            : <Home/>}
          
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