import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {

  const navStyle = {
    color: 'white'
  }

  return (
    <nav>
      <h3>Logo</h3>
      <ul className='nav-links'>
        <Link to='/pokemon' style={navStyle}>
          <li>Pokemon</li>
        </Link>
        <Link to='/shop' style={navStyle}>
          <li>shop</li>
        </Link>
      </ul>
    </nav>
  )
}
