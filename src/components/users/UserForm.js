import React from 'react'
import ImageUpload from '../ImageUpload'
import Select from 'react-select'

const UserForm = ({ data, options, handleMultiChange, handleChange, handleSubmit, errors }) => {
  
  const prePopulateArray = data.skills.map(skill => {
    return { value: skill, label: skill }
  })
 
  return (
    <section className="user-section">
      <h2 className="title">Register</h2>
      <form onSubmit={handleSubmit} className="user-container">
        <div className="user-info">
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
        <div className="user-image">
          {
            data.image ?
              <figure className="imageContainer">
                <label className="label">Your photo</label>
                <img className="image" src={data.image} alt={data.name} />
              </figure>
              :
              <ImageUpload
                // labelText="my custom label text"
                handleChange={handleChange}
                fieldName="image"
                // labelClassName="my-label-class"
                inputClassName="my-input-class"
              />
          }
          
          
          <hr />
          <button type="submit" className="button is-primary">SAVE</button>
        </div>
        <div className="skills-recipes">
          <label className="label">What are your skills?</label>
          <div className="control">
            <Select
              options={options}
              isMulti
              defaultValue={prePopulateArray}
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
                value={data.city}
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
                value={data.postcode}
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


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4de55e938bb2e0348e40abc82cce0ededea8d872
// export default UserForm
=======
export default UserForm
>>>>>>> 5e586d7f16b5ee6beac8c3ede0c02907d6ad0713
