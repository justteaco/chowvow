import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
// import Auth from '../../lib/auth'

class UserShow extends React.Component {
  state = { chef: null }
  async componentDidMount() {
    const chefId = this.props.match.params.id
    try {
      const res = await axios.get(`https://localhost:8000/chefs/${chefId}`)
      this.setState({ chef: res.data })
    } catch (err) {
      this.props.history.push('/notfound')
    }
  }

  render() {
    // const { user } = this.state
    // if (!user) return null
    return (
      <section className="userSection">
        <div className="userContainer">
          <div className="userInfo">
            <h2 className="title">NAME:</h2>
            <p>MACK JAY</p>
            <hr />
            <h2 className="title">RATING:</h2>
            <div className="starRating">
              <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <hr />
            <h2 className="title">LOCATION:</h2>
            <p>LONDON</p>
            <hr />
          </div>
          <div className="userImage">
            <button className="button is-warning">EDIT</button>
            <hr />
            <figure className="imageContainer">
              <img className="image" src='https://images.unsplash.com/photo-1492462543947-040389c4a66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' alt='Mack Jay' />
            </figure>
            <hr />
            <button className="button is-success">INTERESTED</button>
          </div>
          <div className="skills-recipes">
            <h2 className="title">SKILLS:</h2>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </section>
    )
  }
}

export default UserShow
