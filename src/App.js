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
            <Home/>
            homesmaybe ?
          </div>
          )
        }

  }

export default connect()(App)