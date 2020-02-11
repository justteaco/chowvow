import React from 'react'
import axios from 'axios'

class UserShow extends React.Component {
  state = { 
    user: {},
    skills: []
  }

  async componentDidMount() {
    const chefId = this.props.match.params.id
    try {
      const res = await axios.get(`/api/chefs/${chefId}`)
      this.setState({ user: res.data, skills: res.data.skills })
    } catch (err) {
      this.props.history.push('/notfound')
    }
  }

  render() {
    const { name, city, _id, image } = this.state.user
    return (
      <section className="userSection">
        <div className="userContainer">
          <div className="userInfo">
            <h2 className="title">NAME:</h2>
            <p>{name}</p>
            <hr />
            <h2 className="title">RATING:</h2>
            <div className="starRating">
              <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
            <hr />
            <h2 className="title">LOCATION:</h2>
            <p>{city}</p>
            <hr />
          </div>
          <div className="userImage">
            <button className="button is-warning">EDIT</button>
            <hr />
            <figure className="imageContainer">
              <img className="image" src={image} alt={_id} />
            </figure>
            <hr />
            <button className="button is-success">INTERESTED</button>
          </div>
          <div className="skills-recipes">
            <h2 className="title">SKILLS:</h2>
            {this.state.skills.map((skill, i) => <p key={i}>{skill}</p>)}
          </div>
        </div>
      </section>
    )
  }
}

export default UserShow
