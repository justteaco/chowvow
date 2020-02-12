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

  options = [
    { value: 'African', label: 'African' },
    { value: 'Caribbean', label: 'Caribbean' },
    { value: 'Chinese', label: 'Chinese' },
    { value: 'French', label: 'French' },
    { value: 'Greek', label: 'Greek' },
    { value: 'Indian', label: 'Indian' },
    { value: 'Italian', label: 'Italian' },
    { value: 'Japanese', label: 'Japanese' },
    { value: 'Korean', label: 'Korean' },
    { value: 'Mexican', label: 'Mexican' },
    { value: 'Moroccan', label: 'Moroccan' },
    { value: 'South-East Asian', label: 'South-East Asian' },
    { value: 'Turkish/Middle-Eastern', label: 'Turkish/Middle-Eastern' },
    { value: 'Vegan', label: 'Vegan' },
    { value: 'Vegetarian', label: 'Vegetarian' }
  ]

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
  
  handleMultiChange = (selected) => {
    const skills = selected ? selected.map(item => item.value) : []
    const data = { ...this.state.data, skills }
    this.setState({ data })
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
    console.log('edit page')
    return (
      <section className="section">
        <div className="container">
          <UserForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handlesSubmit}
            errors={this.state.errors}
            options={this.options}
            handleMultiChange={this.handleMultiChange}
          />
          <hr />
          <button onClick={this.handleDelete} className="button is-danger">Delete Profile</button>
          <hr />
        </div>
      </section>
    )
  }
}

export default UserEdit