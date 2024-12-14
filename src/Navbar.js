import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <h1>the lycce blog</h1>
        <div className='link'>
            <a href='/'>Home</a>
            <a href='/create' style={{
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius: "8px"
            }}>New blog</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
