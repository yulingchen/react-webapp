import React, { Component, PropTypes } from 'react'
import Slider from 'react-slick'
import classNames from 'classnames/bind'
import {isArray,substrArrayByLength} from '../utils/func.js'

export default class Wrapper extends Component {
  constructor(props) {
    super(props)
  }
  initWrapItem(itemStyle,data) {
    return data.map((item,index)=>{
      const icon = 'icon-' + item.icon
      const wrapperIcon = classNames(
        'icon',icon
      )
      const iconStyle = {
        fontSize: '32px',
        color: '#FF4400'
      }
      return (
        <li key={index}
            className="item"
            style={itemStyle}>
          <div style={iconStyle}>
            <i className={wrapperIcon}></i>
          </div>
          {item.name}
        </li>
      )
    })
  }
  initWrapPage(data) {
    const settings = {
      dots: true,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    }
    const tr = this.props.trLength || 2
    const td = this.props.tdLength || 4

    const itemStyle = {
      'width': `${100/tr}%`
    }
    if (isArray(data)) {
      let newDataArray = substrArrayByLength(data,tr*td)
      return (
        <Slider {...settings}>
          {
            newDataArray.map((ul,key)=>{
              return (
                <ul key={key}>
                  {this.initWrapItem(itemStyle,ul)}
                </ul>
              )
            })
          }
        </Slider>
      )
      return <div></div>
    }
  }
  render() {
    const {data} = this.props
    return (
      <section className="wrapper">
        
          {this.initWrapPage(data)}
        
      </section>
    )
  }
}

Wrapper.propTypes = {
  // string: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  // bool: PropTypes.bool.isRequired,
  td: PropTypes.number,
  tr: PropTypes.number,
  // func: PropTypes.func.isRequired,
  // object: PropTypes.object.isRequired
}