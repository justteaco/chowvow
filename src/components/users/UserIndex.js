import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import FailedPage from '../common/FailedPage'

class UserIndex extends React.Component {
  state = {
    users: [],
    skillFilter: '',
    avgRating: null
  }

  async getData() {
    try {
      const res = await axios.get('/api/chefs')
      let filteredUsers = []
      const skillFilter = localStorage.getItem('skill')
      res.data.filter(user => {
        if (user.skills.includes(`${skillFilter}`)) {
          filteredUsers = [...filteredUsers, user]
        }
        return filteredUsers
      })
      this.setState({ users: filteredUsers, skillFilter })
      this.calcAvgRating()
    } catch (err) {
      console.log(err)
    }
  }

  calcAvgRating = () => {
    let ratings = []
    this.state.users.map(user => ratings = [...user.rating])
    const ratingValues = []
    ratings.map(rate => ratingValues.push(rate.rating))
    const sum = ratingValues.reduce((previous, current) => current += previous)
    const avgRating = (sum / ratingValues.length).toFixed(1)
    this.setState({ avgRating })
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate() {
    const skillFilter = localStorage.getItem('skill')
    skillFilter !== this.state.skillFilter ? this.getData() : null
  }

  hasRatings = () => this.state.avgRating > 0

  render() {
    return (
      <>
        <h2 className="skill-header">Skill : <span className="has-text-info">{localStorage.getItem('skill')}</span></h2>
        {this.state.users.map(user => (
          <Link to={`/chefs/${user._id}`} key={user._id}>
            <div className="box">
              <article className="media">
                <img src={user.image} alt={user.name} />
                <div className="info">
                  <div className="bio">
                    <h3 className="title">{user.name}</h3>
                    {this.hasRatings() && <h3>{this.state.avgRating} <span className="star">★</span></h3>}
                    <h4>{user.city}</h4>
                  </div>
                  <div className="skills">
                    {user.skills.map((skill, i) => <p key={i}>{skill}</p>)}
                  </div>
                </div>
              </article>
            </div>
          </Link>
        ))
        }
      </>
    )
  }
}

export default UserIndex