import React from 'react'
import axios from 'axios'

class ImageUpload extends React.Component {
  state = {
    image: null
  }

  handleUpload = async ({ target: { files } }) => {
    // console.log(files[0])
    const data = new FormData
    data.append('file', files[0])
    data.append('upload_preset', 'afar9d6z')
    // console.log(data)
    const res = await axios.post('https://api.cloudinary.com/v1_1/dqrkw1z1a/image/upload', data)
    // data.append('upload_preset', 'trmd7p1q')
    // // console.log(data)
    // const res = await axios.post('https://api.cloudinary.com/v1_1/tbanks9/image/upload', data)
    // console.log(res)
    this.setState({ image: res.data.url }, () => {
      console.log('hi')
      this.props.handleChange({ target: { name: this.props.fieldName, value: res.data.url } })
      console.log(this.props)
    })
  }

  render() {
    const labelClass = this.props.labelClassName ? this.props.labelClassName : 'default_class'
    // const { image } = this.state
    const { image } = this.state
    return (
      <>
        {image ?      
          <div>
            <img src={image} />
          </div>
          :
          <>
            {/* <label>Upload your image!</label> */}
            {/* <label>{this.props.labelText}</label> */}
            <label className={labelClass}>{this.props.labelText}</label>
            <input
              className={this.props.inputClassName}
              type="file"
              onChange={this.handleUpload}
            />
          </>
        }
      </>
    )
  }
}

export default ImageUpload