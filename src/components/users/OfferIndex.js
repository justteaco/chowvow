import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
class Offers extends React.Component {
  state = {
    offersPending: [],
    offersAccepted: []
  }
  getOffers = user => {
    return (axios.get(`/api/chefs/${user.offeringUser}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    }))
  }
  getAccepted = user => {
    return (axios.get(`/api/chefs/${user.acceptedUser}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    }))
  }
  findOffers = async user => {
    Promise.all(user.data.offersPending.map(info => {
      return this.getOffers(info)
    }))
      .then(user => {
        this.setState({ offersPending: user })
      })
    Promise.all(user.data.offersAccepted.map(info => {
      return this.getAccepted(info)
    }))
      .then(user => {
        this.setState({ offersAccepted: user })
      })
  }
  async componentDidMount() {
    try {
      const user = await axios.get('/api/offers', {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      await this.findOffers(user)
    } catch (err) {
      console.log(err)
    }
  }
  handleDelete = async offerery => {
    try {
      await axios.delete(`/api/chefs/${Auth.getUser()}/offersPending/${offerery.data._id}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
    } catch (err) {
      console.log(err.response)
    } finally {
      const user = await axios.get('/api/offers', {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      await this.findOffers(user)
    }
  }
  handleDeleteAccepted = async offerery => {
    try {
      await axios.delete(`/api/chefs/${Auth.getUser()}/offersAccepted/${offerery.data._id}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
    } catch (err) {
      console.log(err.response)
    } finally {
      const user = await axios.get('/api/offers', {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      await this.findOffers(user)
    }
  }
  handleAccept = async offerery => {
    this.handleDelete(offerery)
    try {
      await axios.post(`/api/chefs/${Auth.getUser()}/offersAccepted`, offerery, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
    } catch (err) {
      console.log(err.response)
    } finally {
      const user = await axios.get('/api/offers', {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      await this.findOffers(user)
    }
  }
  render() {
    const { offersPending, offersAccepted } = this.state
    return (
      <section className="slate">
        <h2 className="offers">My Offers</h2>
        <h2 className="pending">Pending:</h2>
        {offersPending.length ? offersPending.map((user, i) => {
          return  <div key={i} className="box">
            <article className="media">
              <img src={user.data.image} alt={user.data.id} />
              <div className="info">
                <h2 className="title">{user.data.name}</h2>
                <h4>{user.avgRating > 0 ?
                  <h3>{user.avgRating} <span className="star">★</span></h3>
                  :
                  'Not yet rated'}</h4>
                <h4>Location: <br /> <p className="pending">{user.data.city}</p></h4>
                <div>
                  <ul>
                    <h4>Skills:</h4>
                    {user.data.skills.map((skill, i) => (
                      <li key={i} className="pending">{skill}</li>
                    ))}
                  </ul>
                </div>
                <button onClick={() => this.handleAccept(user)} className="button is-success">Accept</button>
                <button onClick={() => this.handleDelete(user)} className="button is-danger">Delete</button>
              </div>
            </article>
          </div>
        })
          : <h2>None Pending</h2> }
        <h2 className="accepted">Accepted:</h2>
        {offersAccepted.length ? offersAccepted.map((user, i) => {
          return  <div key={i} className="box">
            <article className="media">
              <img src={user.data.image} alt={user.data.id} />
              <div className="info">
                <h2 className="title">{user.data.name}</h2>
                <h4>{user.avgRating > 0 ?
                  <h3>{user.avgRating} <span className="star">★</span></h3>
                  :
                  'Not yet rated'}</h4>
                <h4>Location: <br /> <p className="accepted">{user.data.city}</p></h4>
                <div>
                  <ul>
                    <h4>Skills:</h4>
                    {user.data.skills.map((skill, i) => (
                      <li key={i} className="accepted">{skill}</li>
                    ))}
                  </ul>
                </div>
                <h4>Get in contact:<p className="accepted">{user.data.email}</p></h4>
                <button onClick={() => this.handleDeleteAccepted(user)} className="button is-danger">Delete</button>
              </div>
            </article>
          </div>
        })
          : <h2>None Accepted</h2> }
      </section>
    )
  }
}
export default Offers