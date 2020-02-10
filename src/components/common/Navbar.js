import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">Chow Vow</Link>
            <nav className="navbar is-dark" role="navigation" aria-label="dropdown navigation">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">Skills</a>
                <div className="navbar-dropdown">
                  <Link className="navbar-item" to="/chefs">African</Link>
                  <Link className="navbar-item" to="/chefs">Caribbean</Link>
                  <Link className="navbar-item" to="/chefs">Chinese</Link>
                  <Link className="navbar-item" to="/chefs">French</Link>
                  <Link className="navbar-item" to="/chefs">Greek</Link>
                  <Link className="navbar-item" to="/chefs">Indian</Link>
                  <Link className="navbar-item" to="/chefs">Italian</Link>
                  <Link className="navbar-item" to="/chefs">Japanese</Link>
                  <Link className="navbar-item" to="/chefs">Korean</Link>
                  <Link className="navbar-item" to="/chefs">Mexican</Link>
                  <Link className="navbar-item" to="/chefs">Moroccan</Link>
                  <Link className="navbar-item" to="/chefs">South-East Asian</Link>
                  <Link className="navbar-item" to="/chefs">Spanish</Link>
                  <Link className="navbar-item" to="/chefs">Turkish/Middle-Eastern</Link>
                  <Link className="navbar-item" to="/chefs">Vegan</Link>
                  <Link className="navbar-item" to="/chefs">Vegetarian</Link>
                </div>
              </div>
            </nav>
            <Link className="navbar-item" to="/register">Sign Up</Link>
            <Link className="navbar-item" to="/login">Login</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar