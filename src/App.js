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

        return (

          <Router>
            <Fragment>
              <LoadingBar/>
            <div className="app">
                
                <Nav/>
                  {this.props.loading ===true
                  ? null
                  : <div>

                    <Route path='/' exact component={Landing}/>
                    <Route path='/home' exact component={Home}/>
                    <Route path='/question/:id' component={QuestionMore}/>
                    <Route path='/new' component={NewQuestion}/>
                    <Route path='/login' component={LogedUser}/>
                    <Route path='/userboard' component={UserBoard}/>
                  </div>

                  //<Home/> //<QuestionMore match={{params: {id:'xj352vofupe1dqz9emx13r'}}}/>
                  
                  
                  }
                
                
            </div>
            </Fragment>
          </Router>
          
          )
        }
  }
function mapStateToProps({authedUser}) { 
  return {
    loading: authedUser===null
  }
}


export default connect(mapStateToProps)(App)