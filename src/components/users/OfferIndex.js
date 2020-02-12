import React from 'react'
import axios from 'axios'

class Offers extends React.Component {
  state = {
    offersPending: null,
    offersAccepted: null
  }

  getOffers = sub => {
    return axios.get(`/api/chefs/${sub}`)
  }

  findOffers = async user => {
    Promise.all(user.data.offersPending.map(offer => {
      return this.getOffers(offer.offersPending[0].sub)
    }))
      .then(user => {
        this.setState({ offersPending: user })
      })
  }

  async componentDidMount() {
    const chefId = this.props.match.params.id
    const user = await axios.get(`/api/chefs/${chefId}`)
    await this.findOffers(user)
  }

  handleDelete = user => {
    console.log(user)
  }


  render() {
    const { offersPending } = this.state
    // const { offersPending, offersAccepted } = this.state
    return (
      <>
        <h2>My Offers</h2>
        <h2>Pending:</h2>
        {offersPending ? offersPending.map((user, i) => {
          {console.log(user.data)}
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