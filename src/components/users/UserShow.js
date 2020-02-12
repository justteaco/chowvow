import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'
import UserEdit from '../users/UserEdit'

class UserShow extends React.Component {
  state = {
    user: {},
    skills: [],
    avgRating: 0,
    numOfRatings: 0
  }

  async componentDidMount() {
    const chefId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/chefs/${chefId}`)
      this.setState({ user: res.data, skills: res.data.skills })
      if (res.data.rating.length < 1) return
      this.calculateAvgRating(res)
    } catch (err) {
      this.props.history.push('/notfound')
    }
  }

  handleChange = ({ target: { name, value } }) => {
    const user = { ...this.state.user, [name]: value }
    this.setState({ user })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const chefId = this.props.match.params.id
    try {
      const res = await axios.post(`/api/chefs/${chefId}/rating`, this.state.user)
      this.calculateAvgRating(res)
    } catch (err) {
      this.setState({ error: 'Invalid Credentials' })
    }
  }

  calculateAvgRating = (res) => {
    const numOfRatings = res.data.rating.length
    const ratingNums = []
    res.data.rating.map(rate => ratingNums.push(rate.rating))
    const sum = ratingNums.reduce((previous, current) => current += previous)
    const avg = (sum / ratingNums.length).toFixed(1)
    this.setState({ avgRating: avg, numOfRatings })
  }



  offerPending = async () => {
    const chefId = this.props.match.params.id
    const loggedInUserID = Auth.getPayload()
    try {
      const loggedInUser = await axios.get(`/api/chefs/${loggedInUserID.sub}`)
      const interestedUser = loggedInUser.data
      await axios.post(`/api/chefs/${chefId}/offersPending`, { offersPending: { interestedUser } })
      await axios.get(`/api/chefs/${chefId}`)
    } catch (err) {
      console.log(err.response)
    }
  }


  handleDelete = async () => {
    const chefId = this.props.match.params.id
    try {
      await axios.delete(`/api/chefs/${chefId}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.props.history.push('/chefs')
    } catch (err) {
      console.log(err.response)
    }
  }

  // isOwner = () => Auth.getPayload().sub === this.state.chef._id // Subject is the user id

  hasRatings = () => this.state.avgRating > 0

  render() {
    if (!this.state.user) return null
    const { name, city, image, _id } = this.state.user
    console.log(_id, 'user')
    // console.log(this.state, 'state')
    if (!this.state.user) return null
    return (
      <section className="userSection">
        <div className="userContainer">
          <div className="userInfo">
            <h2 className="title">{name}</h2>
            <hr />
            <div className="starRating">
              {this.hasRatings() && <><h2>{this.state.avgRating} ★</h2><p>{this.state.numOfRatings} ratings</p></>}
              {!this.hasRatings() && <p>No ratings received yet</p>}
            </div>
            <hr />
            <h2 className="title">LOCATION:</h2>
            <p>{city}</p>
            <hr />
          </div>
          <div className="userImage">
            <Link to={`/chefs/${_id}/edit`} className="button is-warning">
              Edit Profile
            </Link>
            <figure className="imageContainer">
              <img className="chefImage" src={image} alt={name} />
            </figure>
            <hr />
            <button className="button is-success" onClick={this.offerPending}>INTERESTED</button>
          </div>
          <div className="skills-recipes">
            <h2 className="title">SKILLS:</h2>
            {this.state.skills.map((skill, i) => <p key={i}>{skill}</p>)}
          </div>
          <div className="rating">
            <p>Rate {name}:</p>
            <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleChange} name="rating" type="number" min="1" max="5"></input>
              <button type="submit">Submit</button>

            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default UserShow
