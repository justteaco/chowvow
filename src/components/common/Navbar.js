import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">Chow Vow</Link>
            <Link className="navbar-item" to="/cooks/:skills">Skills</Link>
            <Link className="navbar-item" to="/register">Sign Up</Link>
            <Link className="navbar-item" to="/login">Login</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar