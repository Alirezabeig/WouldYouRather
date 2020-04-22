import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/Shared'
import home from './components/home'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render (){
    
    return (
      <div>
        <home />
      </div>
      )
    }

  }

export default connect()(App)