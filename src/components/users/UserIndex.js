import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
// import UserShow from './UserShow'
// import FailedPage from '../common/FailedPage'

class UserIndex extends React.Component {
  state = {
    users: [],
    userInput: ''
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/chefs')
      this.setState({ users: res.data })
    } catch (err) {
      console.log(err)
    }
  }

  // handleChange = userInput => {
  //   this.setState({ userInput })
  // }

  render() {
    // console.log(this.state)
    // if (!this.state.users) return null
    // const filterUsers = this.state.users.filter(user => user.name.toLowerCase().includes(this.state.userInput.toLowerCase()) || user.location.toLowerCase().includes(this.state.userInput.toLowerCase()) || user.skill.toLowerCase().includes(this.state.userInput.toLowerCase()))
    // console.log(filterUsers)
    return (
      // <>
      //     <div className="location-search">
      //     </div>
      //   <section className="section">
      //     <div className="container">
      //       <div className="columns is-mobile is-multiline">
      //         {filterUsers.length === 0 && this.state.userInput ?
      //           <FailedPage /> :
      //           filterUsers.map(user => <UserShow key={user._id} {...user} />)}
      //       </div>
      //     </div>
      //   </section>
      // </>
      <>
        <h2 className="title is-2">Skill: {localStorage.getItem('skill')}</h2>
        {this.state.users.map(user => (
          // <Link to="/chefs/:id" component={UserShow} key={user._id}>
          <div key={user.id} className="box">
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