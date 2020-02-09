import React from 'react'
import Navbar from '../common/Navbar'
import axios from 'axios'
import UserShow from './UserShow'
import FailedPage from '..//common/ErrorPage'

class UserIndex extends React.Component {
  state = {
    user: null, 
    userInput: ''
  }

  async componentDidMount() {
    try {
      const res = await axios.get('/api/users')
      console.log(res.data)
      this.setState({ users: res.data })
      console.log(this.state.users)
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = userInput => {
    this.setState({ userInput })
  }

  render() {
    if (!this.state.users) return null
    const filterUsers = this.state.users.filter(user => user.name.toLowerCase().includes(this.state.userInput.toLowerCase()) || user.location.toLowerCase().includes(this.state.userInput.toLowerCase()) || user.skill.toLowerCase().includes(this.state.userInput.toLowerCase()))
    console.log(filterUsers)
    return (
      <>
        <Navbar/>
          <div className="location-search">
          </div>
        <section className="section">
          <div className="container">
            <div className="columns is-mobile is-multiline">
              {filterUsers.length === 0 && this.state.userInput ?
                <FailedPage /> :
                filterUsers.map(user => <UserShow key={user._id} {...user} />)}

            </div>
          </div>
        </section>
      </>
    )
  }
}

export default UserIndex