import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <h1>the lycce blog</h1>
        <div className='link'>
            <Link to='/'>Home</Link>
            <Link to="/create" style={{
                color: "white",
                backgroundColor: "#25b354",
                borderRadius: "8px"
            }}>New blog</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
