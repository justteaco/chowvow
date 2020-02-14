import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/auth'


class Navbar extends React.Component {
  state = {
    navbarOpen: false,
    searchResult: null
  }

  toggleNavBar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  handleClick = (e) => {
    localStorage.setItem('skill', e.target.innerHTML)
  }

  handleLogout = () => {
    Auth.logout()
    this.props.history.push('/')
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }

  render() {
    const { navbarOpen } = this.state
    return (
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">Chow Vow</Link>
            <Link className="navbar-item" to="/map/london">Map</Link>
          </div>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link has-text-white" onClick={this.toggleNavBar}>Skills</a>
            {
              navbarOpen &&
              <div className="navbar-dropdown">
                <Link className="navbar-item" to="/chefs" onClick={this.handleClick}>All</Link>
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
            }
          </div>

          <div className="navbar-end">
            {!Auth.isAuthenticated() && <Link className="navbar-item" to="/register">Sign up</Link>}
            {!Auth.isAuthenticated() && <Link className="navbar-item" to="/login">Login</Link>}
            {/* {Auth.isAuthenticated() && <Link className="navbar-item" to="/messages">Inbox</Link>} */}
            {Auth.isAuthenticated() && <Link className="navbar-item" to="/offers">Offers</Link>}
            {Auth.isAuthenticated() && <Link className="navbar-item" to="/profile">Profile</Link>}
            {Auth.isAuthenticated() && <a className="navbar-item" onClick={this.handleLogout}>Logout</a>}
          </div>

        </div>



      </nav>

    )
  }
}

export default withRouter(Navbar)



