import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'
// import UserEdit from '../users/UserEdit'

class UserShow extends React.Component {
  state = {
    user: {},
    skills: [],
    review: '',
    ratingsCount: 0,
    colab: true
  }

  async getData() {
    const chefId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/chefs/${chefId}`)
      console.log(res)
      this.setState({ user: res.data, skills: res.data.skills })
      this.countRatings(res)
    } catch (err) {
      // this.props.history.push('/notfound')
    }
  }

  componentDidMount() {
    this.getData()
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
      this.getData()
      this.countRatings(res)
      const rev = await axios.post(`/api/chefs/${chefId}/review`, this.state.user)
      this.submitReview(rev)
    } catch (err) {
      this.setState({ error: 'Invalid Credentials' })
    }
  }

  // handleReviewSubmit = async e => {
  //   e.preventDefault()
  //   const chefId = this.props.match.params.id
  //   try {
  //     const rev = await axios.post(`/api/chefs/${chefId}/review`, this.state.user)
  //     this.submitReview(rev)
  //   } catch (err) {
  //     this.setState({ error: 'Invalid Credentials' })
  //   }
  // }

  countRatings = (res) => {
    const ratingsCount = res.data.rating.length
    this.setState({ ratingsCount })
  }

  submitReview = (rev) => {
    const review = rev.data.review.length
    // review.push(review)
    this.setState({ review })
    console.log('checking this works')
  }

  // submitReview = async () => {
  //   const review = this.props.match.params.id
  //   review.push(review)
  //   console.log('checking')
  //   // this.setState({ user })
  // }

  offerPending = async () => {
    const chefId = this.props.match.params.id
    try {
      await axios.post(`/api/chefs/${chefId}/offersPending`, null ,{
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      }) 
      this.changeButton()
    } catch (err) {
      console.log(err.response)
    }
  }
  
  changeButton = () => {
    this.setState({ colab: false })
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

  hasRatings = () => this.state.user.avgRating > 0

  render() {
    const { name, city, image, avgRating, _id } = this.state.user
    const { ratingsCount, skills, colab } = this.state
    if (!this.state.user) return null
    return (
      <section className="user-section">
        <div className="user-container">
          <div className="user-info">
            <h2 className="username">{name}</h2>
            <hr />
            <div className="star-rating">
              {ratingsCount ?
                <><h2>{avgRating} ★</h2><p>{ratingsCount} ratings</p></>
                :
                <p>No ratings received</p>}
            </div>
            <Link to={`/chefs/${_id}/review`}>
              <div className="allReviews">
                <p>Read reviews</p>
              </div>
            </Link>
            <hr />
            <h2>{city}</h2>
            <hr />
          </div>
          <div className="user-image">
            <Link to={`/chefs/${_id}/edit`} className="button is-warning">
              Edit Profile
            </Link>
            <figure className="image-container">
              <img className="chef-image" src={image} alt={name} />
            </figure>
            <hr />
            {colab ? <button className="button is-success" onClick={this.offerPending}>Colaborate?</button> : <button className="button is-danger">Sent</button>}
          </div>
          <div className="skills-recipes">
            <div className="skills">
              <h2 className="title">Skills</h2>
              {skills.map((skill, i) => <p key={i}>{skill}</p>)}
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
                <input onChange={this.handleChange} name="review" type="text" maxLength="200" />
                <button className="button is-fullwidth is-info" type="submit">Submit</button>
              </form>
              {/* <form onSubmit={this.handleReviewSubmit} className="ratingForm">
                <button className="button is-fullwidth is-info" type="submit">Submit</button>
              </form> */}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default UserShow
