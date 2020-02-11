import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

import UserForm from './UserForm'

class UserEdit extends React.Component {
  state = {
    data: {
      name: '',
      email: '',
      image: '',
      skills: '',
      city: '',
      postcode: ''
    }, 
    errors: {}
  }

  async componentDidMount() {
    const UserId = this.props.match.params.id
    // console.log(this.props.match.params.id)
    try {
      const res = await axios.get(`api/chefs/${UserId}`)
      this.setState({ data: res.data })
    } catch (err) {
      console.log('something is wrong', err)
    }
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }
  handlesSubmit = async (e) => {
    e.preventDefualt()
    const UserId = this.props.match.params.id
    try {
      const { data } = await axios.put(`api/chefs/${UserId}`, this.state.data, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push(`/chefs/${data._id}`)
    } catch (err) {
      this.setState(err.response.data.errors)
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <UserForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handlesSubmit}
          />
        </div>
      </section>
    )
  }
}

export default UserEdit