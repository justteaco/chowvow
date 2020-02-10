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
                  <a className="navbar-item" href="/chefs">African</a>
                  <a className="navbar-item" href="/chefs">Caribbean</a>
                  <a className="navbar-item" href="/chefs">Chinese</a>
                  <a className="navbar-item" href="/chefs">French</a>
                  <a className="navbar-item" href="/chefs">Greek</a>
                  <a className="navbar-item" href="/chefs">Indian</a>
                  <a className="navbar-item" href="/chefs">Italian</a>
                  <a className="navbar-item" href="/chefs">Japanese</a>
                  <a className="navbar-item" href="/chefs">Korean</a>
                  <a className="navbar-item" href="/chefs">Mexican</a>
                  <a className="navbar-item" href="/chefs">Moroccan</a>
                  <a className="navbar-item" href="/chefs">South-East Asian</a>
                  <a className="navbar-item" href="/chefs">Spanish</a>
                  <a className="navbar-item" href="/chefs">Turkish/Middle-Eastern</a>
                  <a className="navbar-item" href="/chefs">Vegan</a>
                  <a className="navbar-item" href="/chefs">Vegetarian</a>
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