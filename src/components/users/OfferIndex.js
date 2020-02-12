import React from 'react'
import axios from 'axios'
import Auth from '../../lib/auth'
class Offers extends React.Component {
  state = {
    offersPending: null,
    offersAccepted: null
  }

  getOffers = user => {
    return (axios.get(`/api/chefs/${user.offeringUser}`))
  }

  findOffers = async user => {
    console.log(user.data.offersPending)
    Promise.all(user.data.offersPending.map(info => {
      return this.getOffers(info)
    }))
      .then(user => {
        console.log(user)
        this.setState({ offersPending: user })
      })
  }

  async componentDidMount() {
    const chefId = this.props.match.params.id
    const user = await axios.get(`/api/chefs/${chefId}/offers`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
    console.log(user)
    await this.findOffers(user)
  }

  // handleDelete = async user => {
  //   console.log(user)
  //   const userId = this.props.match.params.id
  //   try {
  //     await axios.delete(`/api/chefs/${userId}/offersPending`, {
  //       headers: { Authorization: `Bearer ${Auth.getToken()}` }
  //     })
  //   } catch (err) {
  //     console.log(err.response)
  //   }
  // }


  render() {
    const { offersPending, offersAccepted } = this.state
    return (
      <>
        <h2>My Offers</h2>
        <h2>Pending:</h2>
        {offersPending ? offersPending.map((user, i) => {
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
            <button onClick={() => this.handleDelete(user)} name={user.data.id}>Delete</button>
            <button onClick={this.handleAccept} name={user.data.id}>Accept</button>
          </div>
        })
          : <h2>No offers</h2> }
          <h2>Accepted:</h2>
      </>
    )
  }
}

export default Offers