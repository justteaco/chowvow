import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
// import UserShow from './UserShow'
// import FailedPage from '../common/FailedPage'
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
    console.log(this.state)
    // console.log(this.state)
    // if (!this.state.users) return null
    // const filterUsers = this.state.users.filter(user => user.name.toLowerCase().includes(this.state.userInput.toLowerCase()) || user.location.toLowerCase().includes(this.state.userInput.toLowerCase()) || user.skill.toLowerCase().includes(this.state.userInput.toLowerCase()))
    // console.log(filterUsers)
    return (
      <>
        <h2 className="title is-2">Skill: {localStorage.getItem('skill')}</h2>
        {this.state.users.map(user => (
          // <Link to="/chefs/:id" component={UserShow} key={user._id}>
          <div key={user._id} className="box">
            <article className="media">
              <div className="media-left">
                <figure className="image is-128x128">
                  <img className="is-rounded" src={user.image} alt={user.name} />
                </figure>
              </div>
              <div className="info">
                <div className="bio">
                  <h3 className="title">{user.name}</h3>
                  <h3 className="subtitle">★ ★ ★ ★ ☆</h3>
                  <h3 className="subtitle">{user.city}</h3>
                </div>
                <div className="skills">
                  {user.skills.map((skill, i) => <p key={i}>{skill}</p>)}
                </div>
              </div>
            </article>
          </div>
          // </Link>
        ))
        }
      </>
    )
  }
}
export default UserIndex