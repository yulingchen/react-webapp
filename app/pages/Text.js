import React, { Component, PropTypes } from 'react'

import {PhotosMixin} from '../components'

export default class Text extends Component {
  static defaultProps = {
    data: [
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h3.png'},
      {imgUrl: '../static/h4.png'},
      {imgUrl: '../static/h5.png'},
      {imgUrl: '../static/h6.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h4.png'},
      {imgUrl: '../static/h5.png'},
      {imgUrl: '../static/h6.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h3.png'},
      {imgUrl: '../static/h4.png'},
      {imgUrl: '../static/h5.png'},
      {imgUrl: '../static/h6.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h3.png'},
      {imgUrl: '../static/h4.png'},
      {imgUrl: '../static/h5.png'},
      {imgUrl: '../static/h6.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h4.png'},
      {imgUrl: '../static/h5.png'},
      {imgUrl: '../static/h6.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h3.png'},
      {imgUrl: '../static/h4.png'},
      {imgUrl: '../static/h5.png'},
      {imgUrl: '../static/h6.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h4.png'},
      {imgUrl: '../static/h5.png'},
      {imgUrl: '../static/h6.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h3.png'},
      {imgUrl: '../static/h4.png'},
      {imgUrl: '../static/h5.png'},
      {imgUrl: '../static/h6.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h4.png'},
      {imgUrl: '../static/h5.png'},
      {imgUrl: '../static/h6.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h3.png'},
      {imgUrl: '../static/h4.png'},
      {imgUrl: '../static/h5.png'},
      {imgUrl: '../static/h6.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h4.png'},
      {imgUrl: '../static/h5.png'},
      {imgUrl: '../static/h6.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h3.png'},
      {imgUrl: '../static/h4.png'},
      {imgUrl: '../static/h5.png'},
      {imgUrl: '../static/h6.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h3.png'},
      {imgUrl: '../static/h4.png'},
      {imgUrl: '../static/h5.png'},
      {imgUrl: '../static/h6.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h4.png'},
      {imgUrl: '../static/h5.png'},
      {imgUrl: '../static/h6.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h3.png'},
      {imgUrl: '../static/h4.png'},
      {imgUrl: '../static/h5.png'},
      {imgUrl: '../static/h6.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h4.png'},
      {imgUrl: '../static/h5.png'},
      {imgUrl: '../static/h6.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h3.png'},
      {imgUrl: '../static/h4.png'},
      {imgUrl: '../static/h5.png'},
      {imgUrl: '../static/h6.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h4.png'},
      {imgUrl: '../static/h5.png'},
      {imgUrl: '../static/h6.png'},
      {imgUrl: '../static/h1.png'},
      {imgUrl: '../static/h2.png'},
      {imgUrl: '../static/h3.png'}
    ]
  }
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    e.preventDefault()
    const {data} = this.props
    const value = e.target.value ? e.target.value : this.props.length
    this.setState({data: data.slice(0, value)})
  }
  handleClick(item) {
    const data = this.state.data
    data.push(item)
    this.setState({data: data})
  }
  render() {
    const {data} = this.props
    return (
      <div>
        <PhotosMixin photos={this.state.data} boxSize={200} limiTo={100} />
        {
          data.map((item,index)=>{
            return (
              <img style={{width: '20px'}}
                   key={index}
                   src={item.imgUrl}
                   onClick={this.handleClick.bind(this,item)} />
            )
          })
        }
      </div>
    )
  }
}

Text.propTypes = {
  // string: PropTypes.string.isRequired,
  // array: PropTypes.array.isRequired,
  // bool: PropTypes.bool.isRequired,
  // number: PropTypes.number.isRequired,
  // func: PropTypes.func.isRequired,
  // object: PropTypes.object.isRequired
}