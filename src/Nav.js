import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName=''>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' activeClassName='active'>
            Compose Question
          </NavLink>
        </li>
      </ul>
    </nav>
  )
} 