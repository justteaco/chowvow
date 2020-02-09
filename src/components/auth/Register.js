import React from 'react'
import axios from 'axios'

class Register extends React.Component {
  state = {
    data: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    },
    errors: {}
  }

  handleChange = e => {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit = async e => {
    e.preventDefault()

    console.log('submitting', this.state.data)
    try {
      await axios.post('https://localhost:8000/register', this.state.data)
      this.props.history.push('/cooks')
    } catch (err) {
      // console.log(err.response.data.errors) //Specific only to this API
      this.setState({ errors: err.response.data.errors })
    }
  }

  render() {
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

export default Register