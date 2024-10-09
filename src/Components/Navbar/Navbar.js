import React from 'react'
import "./Navbar.css"
import { SiEducative } from 'react-icons/si'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='nav'>
        <div className='navigation'>
          <Link to="/">
            <div className='nav_header'>
              <div className='logo'> <SiEducative /> </div>
                <h2 className='nav_logo'> <span> MOH </span>South Sudan</h2>
              </div>
           
          </Link>
          <div className='links'>
            <ul>
              <li>Courses</li>
              <li>HackerSpace</li>
              <li>Coding Ground</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className='nav_button'>
            <button>Login</button>
            <button>Register</button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
