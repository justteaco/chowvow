import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

  handleClick = (e) => {
    localStorage.setItem('skill', e.target.innerHTML)
  }

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
                  <Link className="navbar-item" to="/chefs" onClick={this.handleClick}>African</Link>
                  <Link className="navbar-item" to="/chefs" onClick={this.handleClick}>Caribbean</Link>
                  <Link className="navbar-item" to="/chefs" onClick={this.handleClick}>Chinese</Link>
                  <Link className="navbar-item" to="/chefs" onClick={this.handleClick}>French</Link>
                  <Link className="navbar-item" to="/chefs" onClick={this.handleClick}>Greek</Link>
                  <Link className="navbar-item" to="/chefs" onClick={this.handleClick}>Indian</Link>
                  <Link className="navbar-item" to="/chefs" onClick={this.handleClick}>Italian</Link>
                  <Link className="navbar-item" to="/chefs" onClick={this.handleClick}>Japanese</Link>
                  <Link className="navbar-item" to="/chefs" onClick={this.handleClick}>Korean</Link>
                  <Link className="navbar-item" to="/chefs" onClick={this.handleClick}>Mexican</Link>
                  <Link className="navbar-item" to="/chefs" onClick={this.handleClick}>Moroccan</Link>
                  <Link className="navbar-item" to="/chefs" onClick={this.handleClick}>South-East Asian</Link>
                  <Link className="navbar-item" to="/chefs" onClick={this.handleClick}>Spanish</Link>
                  <Link className="navbar-item" to="/chefs" onClick={this.handleClick}>Turkish/Middle-Eastern</Link>
                  <Link className="navbar-item" to="/chefs" onClick={this.handleClick}>Vegan</Link>
                  <Link className="navbar-item" to="/chefs" onClick={this.handleClick}>Vegetarian</Link>
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