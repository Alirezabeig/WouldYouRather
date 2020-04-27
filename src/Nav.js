import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './css/index.css'
import { connect } from 'react-redux'

class Nav extends Component {
  render () {
    const {user,authedUser
    } = this.props
  return (
    
    <nav>
      
      <div className="topnav">
        <div >

                    

        <ul >
          <NavLink to='/home' >
            Home
          </NavLink>
        
          <NavLink to='/new' >
            Compose Question
          </NavLink>
         
          <NavLink to='/userboard' >
            LeaderBoard
          </NavLink>


          <NavLink to='/login' >
            login
          </NavLink>
         
          
        </ul>
        </div>
          </div>
      
    </nav>
  )
  } 
}

function mapStateToProps(state){
  const { users, authedUser } = state
  const user = users[authedUser]
  return {
    user,
    authedUser,
    

  }
}

export default connect(mapStateToProps)(Nav)