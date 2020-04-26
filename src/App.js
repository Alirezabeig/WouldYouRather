import React, { Component, Fragment} from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/Shared'
import Home from './Home'
import LoadingBar from 'react-redux-loading-bar'
import NewQuestion from './NewQuestion'
import QuestionMore from './QuestionMore'
import Nav from './Nav'
//import Vote from './Vote'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './css/app.css'

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
                    
                    <Route path='/' exact component={Home}/>
                    <Route path='/question/:id' component={QuestionMore}/>
                    <Route path='/new' component={NewQuestion}/>
                       
                  </div>

                  //<Home/> //<QuestionMore match={{params: {id:'xj352vofupe1dqz9emx13r'}}}/>
                  
                  
                  }
                
                App
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