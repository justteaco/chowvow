import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
import { Link } from 'react-router-dom'
// import UserEdit from '../users/UserEdit'

class UserProfile extends React.Component {
  state = {
    user: {},
    skills: [],
    review: '',
    ratingsCount: 0
  }

  async getData() {
    const currentChef = Auth.getUser()
    try {
      const res = await axios.get(`/api/chefs/${currentChef}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      this.setState({ user: res.data, skills: res.data.skills })
      this.countRatings(res)
    } catch (err) {
      this.props.history.push('/notfound')
    }
  }

  componentDidMount() {
    this.getData()
  }

  handleChange = ({ target: { name, value } }) => {
    const user = { ...this.state.user, [name]: value }
    this.setState({ user })
  }

  countRatings = (res) => {
    const ratingsCount = res.data.rating.length
    this.setState({ ratingsCount })
  }

  offerPending = async () => {
    const chefId = this.props.match.params.id
    try {
      await axios.post(`/api/chefs/${chefId}/offersPending`, { offeringUser: Auth.getUser() })
    } catch (err) {
      console.log(err.response)
    }
  }



  hasRatings = () => this.state.user.avgRating > 0

  render() {
    const { name, city, image, avgRating, _id } = this.state.user
    const { ratingsCount } = this.state
    if (!this.state.user) return null
    return (
      <section className="user-section">
        <div className="user-container">
          <div className="user-info">
            <h2 className="username">{name}</h2>
            <hr />
            <div className="star-rating">
              {ratingsCount ?
                <><h2>{avgRating} ★</h2><p>{ratingsCount} reviews</p></>
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
          </div>
          <div className="skills-recipes">
            <div className="skills">
              <h2 className="title">Skills</h2>
              {this.state.skills.map((skill, i) => <p key={i}>{skill}</p>)}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default UserProfile
