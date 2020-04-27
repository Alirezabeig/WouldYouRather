import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/index.css'

export default function Nav () {
  return (
    <nav>
      
      <div className="navbar">
        <div >
        <ul >
          <NavLink to='/' >
            Home
          </NavLink>
        
          <NavLink to='/new' >
            Compose Question
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