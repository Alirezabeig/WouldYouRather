import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './css/index.css'
import { connect } from 'react-redux'

class Nav extends Component {
  render () {
    const {user} = this.props
  return (
    
    <nav>
      
      <div className="navbar">
        <div >


        <img src={user.avatarURL} alt="avatar!" className="avatar" />
                    {user.name}

        <ul >
          <NavLink to='/' >
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

function mapStateToProps({users,authedUser}){
  const user = users[authedUser]
  return {
    user,
    authedUser

  }
}

export default connect(mapStateToProps)(Nav)