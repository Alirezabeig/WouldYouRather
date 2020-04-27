import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './css/index.css'
import { connect } from 'react-redux'

class Nav extends Component {


  render () {
    const {user,authedUser} = this.props
  return (
    
    <nav>
       
      <div >
        <div className="topnav" >
        

        {authedUser ? (
        <ul >
          <div className="group1">
          <img src={user.avatarURL} alt="avatar!" className="pic" />
          <div className="name">  
            {user.name} 
          </div>
          </div>
               

          <NavLink to='/home' >
            Home
          </NavLink>
        
          <NavLink to='/new' >
            Compose Question
          </NavLink>
         
          <NavLink to='/userboard' >
            Members
          </NavLink>


          <NavLink to='/login' >
            Log Out
          </NavLink>
        </ul>
        ):(
          <ul>
            
              <p className="login_text">Log in so you can post questions</p>
            </ul>
        )}


        </div>
          </div>
      
    </nav>
  )
  } 
}
///<img src={user.avatarURL} alt="avatar!" className="avatar" />
//{user.name}            


function mapStateToProps(state){
  const { users, authedUser } = state
  //const user = users[authedUser]
  const user =users[authedUser]
  return {
    user,
    authedUser,
    

  }
}

export default connect(mapStateToProps)(Nav)