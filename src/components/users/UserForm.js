import React from 'react'
import ImageUpload from '../ImageUpload'
import Select from 'react-select'

const UserForm = ({ data, options, handleMultiChange, handleChange, handleSubmit, errors }) => {

  return (
    <section className="userSection">
      <h2 className="title">Register</h2>
      <form onSubmit={handleSubmit} className="userContainer">
        <div className="userInfo">
          <div className="field">
            <label className="label">NAME</label>
            <div className="control">
              <input
                className={`input ${errors.name ? 'is-danger' : ''}`}
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={data.name}
              />
            </div>
            {errors.name && <small className="help is-danger">{errors.name}</small>}
          </div>
          <div className="field">
            <label className="label">EMAIL</label>
            <div className="control">
              <input
                className={`input ${errors.email ? 'is-danger' : ''}`}
                placeholder="Email"
                name="email"
                onChange={handleChange}
                value={data.email}
              />
            </div>
            {errors.email && <small className="help is-danger">{errors.email}</small>}
          </div>
        </div>
        <div className="userImage">
          {/* <figure className="imageContainer">
          <label className="label">Your photo</label>
          <img className="image" src='https://www.stleos.uq.edu.au/wp-content/uploads/2016/08/image-placeholder-350x350.png' alt='Placeholder image' />
        </figure> */}
          <ImageUpload
          // labelText="my custom label text"
            handleChange={handleChange}
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
              options={options}
              isMulti
              onChange={handleMultiChange}
            />
          </div>
          <hr />
          <div className="field">
            <label className="label">CITY</label>
            <div className="control">
              <input
                className={`input ${errors.city ? 'is-danger' : ''}`}
                placeholder="City"
                name="city"
                onChange={handleChange}
              />
            </div>
            {errors.city && <small className="help is-danger">{errors.city}</small>}
          </div>
          <hr />
          <div className="field">
            <label className="label">POSTCODE</label>
            <div className="control">
              <input
                className={`input ${errors.postcode ? 'is-danger' : ''}`}
                placeholder="Postcode"
                name="postcode"
                onChange={handleChange}
              />
            </div>
            {errors.postcode && <small className="help is-danger">{errors.postcode}</small>}
          </div>
        </div>
      </form>
    </section>
  )
}


export default UserForm