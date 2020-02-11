import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import React from 'react'
import axios from 'axios'
import MapGL, { Marker, Popup } from 'react-map-gl'
import Geocoder from 'react-map-gl-geocoder'
import { Link } from 'react-router-dom'

const token = process.env.REACT_APP_MAPBOX

class UserMap extends React.Component {
  state = {
    users: [],
    userswithco: [],
    viewport: {
      longitude: 0,
      latitude: 0,
      zoom: 12
    },
    display: false,
    userPicked: {}
  };

  myMap = React.createRef()

  getLatLng = postcode => {
    return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${postcode}.json?access_token=${token}`)
  }

  findlatlong = async () => {
    const users = this.state.users
    const codes = users.map(person => person.postcode)
    Promise.all(codes.map(postcode => {
      return this.getLatLng(postcode)
    }))
      .then(res => {
        const newArr = users.map((user, i) => {
          return {
            ...user,
            latlng: res[i].data.features[0].center
          }
        })
        this.setState({ userswithco: newArr })
      })
  }

  async componentDidMount() {
    try {
      const search = location.pathname.split('/').slice(2).join('/')
      const mapStartFocus = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=${token}`)
      const firstLatLng = mapStartFocus.data.features[0].center
      this.setState({ viewport: { longitude: firstLatLng[0], latitude: firstLatLng[1], zoom: 12 } })
      console.log(this.state.viewport)
      const res = await axios.get('/api/chefs')
      this.setState({ users: res.data })
      await this.findlatlong()
    } catch (err) {
      console.log(err)
    }
  }

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    })
  };

  showUser = user => {
    
    this.setState({ userPicked: user })
  }

  togglePopup = () => {
    const { display } = this.state
    if (!display) {
      this.setState({ display: true })
    } else this.setState({ display: false })
  }


  render() {
    const { viewport, userswithco, userPicked, display } = this.state
    if (!userswithco.length) return null
    return (
      <section className="userSection">
        <div className="map">
          <MapGL
            ref={this.myMap}
            {...viewport}
            height={'75vh'}
            width={'100vw'}
            mapStyle='mapbox://styles/mapbox/streets-v9' 
            onViewportChange={this.handleViewportChange}
            mapboxApiAccessToken={token}
            maxZoom={13}
          >
            <Geocoder
              mapRef={this.myMap}
              mapboxApiAccessToken={token}
              onViewportChange={this.handleViewportChange}
              position="top-left"
            />
            {userswithco[0].latlng && userswithco.map((user, i) => (
              <>
              <Marker 
                key={i}
                latitude={user.latlng[1]}
                longitude={user.latlng[0]}
              >
                <a onClick={(e) => {
                  e.preventDefault()
                  this.showUser(user)
                  this.togglePopup()
                }}>
                  <img src={user.image} className="usersmap" />
                </a>
              </Marker> 
              </>
            ))}
            {display ? (<Popup
              key={userPicked.name}
              latitude={userPicked.latlng[1]}
              longitude={userPicked.latlng[0]}
            >
              <Link to={`/chefs/${userPicked._id}`} key={userPicked._id}>
                {userPicked.name}
                <br />
                Skills:
                {' '}{userPicked.skills.slice(0, userPicked.skills.length).join(', ')}
              </Link>
            </Popup>)
              : null}
          </MapGL>
        </div>
      </section>
    )
  }
}
      

export default UserMap

