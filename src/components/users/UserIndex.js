import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/auth'

class UserIndex extends React.Component {
  state = {
    users: [],
    skillFilter: ''
  }

  async getData() {
    try {
      const res = await axios.get('/api/chefs')
      let filteredUsers = []
      const skillFilter = localStorage.getItem('skill')
      console.log(res.data)
      res.data.filter(user => {
        if (user.skills.includes(`${skillFilter}`)) {
          filteredUsers = [...filteredUsers, user]
        }
        return filteredUsers
      })
      this.setState({ users: filteredUsers, skillFilter })
    } catch (err) {
      console.log(err)
    }
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate() {
    const skillFilter = localStorage.getItem('skill')
    skillFilter !== this.state.skillFilter ? this.getData() : null
  }

  render() {
    console.log(this.state.users)
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
                    {user.avgRating > 0 ?
                      <h3>{user.avgRating} <span className="star">★</span></h3>
                      :
                      null}
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