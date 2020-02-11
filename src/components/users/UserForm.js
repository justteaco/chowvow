import React from 'react'
import ImageUpload from '../ImageUpload'
import Select from 'react-select'


const UserForm = ({ data, handleChange, handleSubmit }) => {

  return (
    <section className="userSection">
      <h2 className="title">Register</h2>
      <form onSubmit={handleSubmit} className="userContainer">
        <div className="userInfo">
          <div className="field">
            <label className="label">NAME</label>
            <div className="control">
              <input
                className={`input ${this.state.errors.name ? 'is-danger' : ''}`}
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={data.name}
              />
            </div>
            {this.state.errors.name && <small className="help is-danger">{this.state.errors.name}</small>}
          </div>
          <div className="field">
            <label className="label">EMAIL</label>
            <div className="control">
              <input
                className={`input ${this.state.errors.email ? 'is-danger' : ''}`}
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
              />
            </div>
            {this.state.errors.email && <small className="help is-danger">{this.state.errors.email}</small>}
          </div>
        </div>
        <div className="userImage">
          {/* <figure className="imageContainer">
          <label className="label">Your photo</label>
          <img className="image" src='https://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png' alt='Placeholder image' />
        </figure> */}
          <ImageUpload
          // labelText="my custom label text"
            handleChange={this.handleChange}
            fieldName="profileImage"
            // labelClassName="my-label-class"
            inputClassName="my-input-class"
          />
          <hr />
          <button type="submit" className="button is-primary">SAVE</button>
        </div>
        <div className="skills-recipes">
          <label className="label">What are your skills?</label>
          <div className="control">
            <Select
              options={this.options}
              isMulti
              onChange={this.handleMultiChange}
            />
          </div>
          <hr />
          <div className="field">
            <label className="label">CITY</label>
            <div className="control">
              <input
                className={`input ${this.state.errors.city ? 'is-danger' : ''}`}
                placeholder="City"
                name="city"
                onChange={this.handleChange}
              />
            </div>
            {this.state.errors.city && <small className="help is-danger">{this.state.errors.city}</small>}
          </div>
          <hr />
          <div className="field">
            <label className="label">POSTCODE</label>
            <div className="control">
              <input
                className={`input ${this.state.errors.postcode ? 'is-danger' : ''}`}
                placeholder="Postcode"
                name="postcode"
                onChange={this.handleChange}
              />
            </div>
            {this.state.errors.postcode && <small className="help is-danger">{this.state.errors.postcode}</small>}
          </div>
        </div>
      </form>
    </section>
  )
}


export default UserForm