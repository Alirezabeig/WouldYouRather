import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/nav.css'

export default function Nav () {
  return (
    <nav>
      
      <div className="nav">
        <div >
        <li >
          <NavLink to='/' >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' >
            Compose Question
          </NavLink>
         
        </li>
        </div>
          </div>
      
    </nav>
  )
} 