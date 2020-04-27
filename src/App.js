import React, { Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/Shared'
import Home from './Home'
import LoadingBar from 'react-redux-loading-bar'
import NewQuestion from './NewQuestion'
import QuestionMore from './QuestionMore'
import Nav from './Nav'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './css/app.css'
import AuthedUser from './LogedUser'
import LogedUser from './LogedUser'
import UserBoard from './UserBoard'
import Landing from './Landing'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
      render() {
        const {loading, authedUser}= this.props
        return (

          <Router>
            <Fragment>
              <LoadingBar/>
            <div className="app">
                
                <Nav/>
                  {loading ===true
                  ? null
                  : <div>

                    <Route path='/' exact component={Landing}/>
                    <Route path='/home' exact component={Home}/>
                    <Route path='/question/:id' component={QuestionMore}/>
                    <Route path='/new' component={NewQuestion}/>
                    <Route path='/login' component={LogedUser}/>
                    <Route path='/userboard' component={UserBoard}/>
                  </div>

                  }
                
                
            </div>
            </Fragment>
          </Router>
          
          )
        }
  }
function mapStateToProps({authedUser}) { 
  return {
    loading: authedUser===null,
    authedUser,
  }
}


export default connect(mapStateToProps)(App)