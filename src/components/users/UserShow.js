import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'

class UserShow extends React.Component {
  state = {
    user: {},
    skills: [],
    avgRating: 0,
    countRatings: 0
  }

  async componentDidMount() {
    const chefId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/chefs/${chefId}`)
      this.setState({ user: res.data, skills: res.data.skills })
      if (res.data.rating.length < 1) return
      this.calcAvgRating(res)
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
    e.target.innerHTML = '<h2>Review submitted</h2>'
    const chefId = this.props.match.params.id
    try {
      const res = await axios.post(`/api/chefs/${chefId}/rating`, this.state.user)
      this.calcAvgRating(res)
    } catch (err) {
      this.setState({ error: 'Invalid Credentials' })
    }
  }

  calcAvgRating = (res) => {
    const countRatings = res.data.rating.length
    const ratings = []
    res.data.rating.map(rate => ratings.push(rate.rating))
    const sum = ratings.reduce((previous, current) => current += previous)
    const avgRating = (sum / ratings.length).toFixed(1)
    this.setState({ avgRating, countRatings })
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


  // handleDelete = async () => {
  //   const chefId = this.props.match.params.id
  //   try {
  //     await axios.delete(`/api/chefs/${chefId}`, {
  //       headers: { Authorization: `Bearer ${Auth.getToken()}` }
  //     })
  //     this.props.history.push('/chefs')
  //   } catch (err) {
  //     console.log(err.response)
  //   }
  // }

  // isOwner = () => Auth.getPayload().sub === this.state.chef._id // Subject is the user id

  hasRatings = () => this.state.avgRating > 0

  render() {
    console.log(this.state.user)
    const { name, city, image } = this.state.user
    if (!this.state.user) return null
    return (
      <section className="user-section">
        <div className="user-container">
          <div className="user-info">
            <h2 className="username">{name}</h2>
            <hr />
            <div className="star-rating">
              {this.hasRatings() && <div><h2>{this.state.avgRating} <span className="star">★</span></h2><p>{this.state.countRatings} ratings</p></div>}
              {!this.hasRatings() && <p>No ratings received yet</p>}
            </div>
            <hr />
            <h2>{city}</h2>
            <hr />
          </div>
          <div className="user-image">
            <button className="button is-warning">Edit</button>
            <hr />
            <figure className="image-container">
              <img className="chef-image" src={image} alt={name} />
            </figure>
            <hr />
            <button className="button is-success" onClick={this.offerPending}>Interested/Send Request</button>
          </div>
          <div className="skills-recipes">
            <div className="skills">
              <h2 className="title">Skills</h2>
              {this.state.skills.map((skill, i) => <p key={i}>{skill}</p>)}
            </div>
            <div className="rating">
              <form onSubmit={this.handleSubmit} className="rating-form">
                <h2>Leave a review</h2>
                <div className="rate">
                  <input onChange={this.handleChange} type="radio" id="star5" name="rating" value="5" />
                  <label htmlFor="star5" title="text">5 stars</label>
                  <input onChange={this.handleChange} type="radio" id="star4" name="rating" value="4" />
                  <label htmlFor="star4" title="text">4 stars</label>
                  <input onChange={this.handleChange} type="radio" id="star3" name="rating" value="3" />
                  <label htmlFor="star3" title="text">3 stars</label>
                  <input onChange={this.handleChange} type="radio" id="star2" name="rating" value="2" />
                  <label htmlFor="star2" title="text">2 stars</label>
                  <input onChange={this.handleChange} type="radio" id="star1" name="rating" value="1" />
                  <label htmlFor="star1" title="text">1 star</label>
                </div>
                <button className="button is-fullwidth is-info" type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default UserShow
