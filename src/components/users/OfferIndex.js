import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
class Offers extends React.Component {
  state = {
    offersPending: [],
    offersAccepted: []
  }

  getOffers = user => {
    return (axios.get(`/api/chefs/${user.offeringUser}`))
  }

  getAccepted = user => {
    return (axios.get(`/api/chefs/${user.acceptedUser}`))
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
    const chefId = this.props.match.params.id
    const user = await axios.get(`/api/chefs/${chefId}/offers`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
    await this.findOffers(user)
  }

  handleDelete = async offerery => {
    const userId = this.props.match.params.id
    try {
      await axios.delete(`/api/chefs/${userId}/offersPending/${offerery.data._id}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
    } catch (err) {
      console.log(err.response)
    } finally {
      const chefId = this.props.match.params.id
      const user = await axios.get(`/api/chefs/${chefId}/offers`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      await this.findOffers(user)
    }
  }

  handleDeleteAccepted = async offerery => {
    const userId = this.props.match.params.id
    try {
      await axios.delete(`/api/chefs/${userId}/offersAccepted/${offerery.data._id}`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
    } catch (err) {
      console.log(err.response)
    } finally {
      const chefId = this.props.match.params.id
      const user = await axios.get(`/api/chefs/${chefId}/offers`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      await this.findOffers(user)
    }
  }

  handleAccept = async offerery => {
    this.handleDelete(offerery)
    const userId = this.props.match.params.id
    try {
      await axios.post(`/api/chefs/${userId}/offersAccepted`, offerery, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
    } catch (err) {
      console.log(err.response)
    } finally {
      const chefId = this.props.match.params.id
      const user = await axios.get(`/api/chefs/${chefId}/offers`, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      await this.findOffers(user)
    }
  }


  render() {
    const { offersPending, offersAccepted } = this.state
    return (
      <>
        <h2>My Offers</h2>
        <h2>Pending:</h2>
        {offersPending.length ? offersPending.map((user, i) => {
          return  <div key={i}>
            <img src={user.data.image} alt={user.data.id} />
            <div>
              <h2>{user.data.name}</h2>
              <h4>Rating:</h4>
              <h4>Location:</h4>
              <h4>{user.data.city}</h4>
              <div>
                <ul>
                  <h4>Skills:</h4>
                  {user.data.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
            <button onClick={() => this.handleDelete(user)}>Delete</button>
            <button onClick={() => this.handleAccept(user)}>Accept</button>
          </div>
        })
          : <h2>None Pending</h2> }
          <h2>Accepted:</h2>
          {offersAccepted.length ? offersAccepted.map((user, i) => {
            return  <div key={i}>
              <img src={user.data.image} alt={user.data.id} />
              <div>
                <h2>{user.data.name}</h2>
                <h4>Rating:</h4>
                <h4>Location:</h4>
                <h4>{user.data.city}</h4>
                <div>
                  <ul>
                    <h4>Skills:</h4>
                    {user.data.skills.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <h4>{user.data.email}</h4>
              <button onClick={() => this.handleDeleteAccepted(user)}>Delete</button>
            </div>
          })
            : <h2>None Accepted</h2> }
      </>
    )
  }
}

export default Offers