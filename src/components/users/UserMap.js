import React from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
import MapGl, { Marker } from 'react-map-gl'
import Axios from 'axios'


const token = 'pk.eyJ1IjoiZGFyYmptIiwiYSI6ImNrNWk5MDFwMjA5NmozZW5weWUyb21xa3YifQ.iJv7D-hvXJ2Tw4p2AiQMtQ'

class UserMap extends React.Component {
  state = {
    users: {},
    postcodes: {}
    
  }

  async componentDidMount() {
    try {
      const res = await Axios.get('/chefs')
      console.log(res)
      this.setState({ users: res })
      // const postcode = users.map
      // const latlong = await axios.get('conertapi/postcode')
      //this.setState({ })
      //get the postcode of each user
      //convert the postcode into lat and long with api
      //place lat and longs into state
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = e => {
    this.setState({ search: e.target.value })
  }

  // handleSubmit = e => {
  //   e.preventDefault()
  //   this.props.history.push(`/books/${this.state.search}/results`)
  // }


  render() {
    return (
      <section className="userSection">
        <form onSubmit={this.handleSubmit}>
          <div className="wrap">
            <div className="search">
              <input 
                type="text"
                name="search" 
                onChange={this.handleChange}
                className="searchTerm"
              />
              <button className="searchButton" type="submit">🔍</button>
            </div>
          </div>
        </form>
      
        <div className="map">
          <MapGl
          // onViewportChange={viewport => {
          //   this.setViewport(viewport)
          // }}
            latitude={54.5}
            longitude={-3}
            height={'75vh'}
            width={'100vw'}
            zoom={ 4.5}
            mapboxApiAccessToken={token}
            mapStyle='mapbox://styles/mapbox/streets-v9'
          >
            {/* <Marker
        latitude={latitude}
        longitude={longitude}
      >
        <div>🍷</div>
      </Marker>  */}
          </MapGl>
        </div>
      </section>
    )
  }
}

export default UserMap
