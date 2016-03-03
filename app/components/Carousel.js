import React, { Component, PropTypes } from 'react'
import Slider from 'react-slick'

import Link from './Link.js'

export default class Carousel extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    // data [Array]
    const data = this.props.data
    // settings [Object]
    const settings = {
      dots: true,
      // dotsClass: 'dotsClass',
      arrows: false,
      // adaptiveHeight: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    }
    // class [Object]
    const carouselClass = {
      width: this.props.width,
      height: this.props.height
    }

    // return
    if (!data)
      return <div>/</div>
    
    return (
      <div className="slider">
        <Slider {...settings}>
          {
            data.map((item,index)=>{
              return (
                <div key={index}>
                  <Link route={item.go}>
                    <img style={carouselClass}
                         src={item.src}
                         alt={item.alt}/>
                  </Link>
                </div>
              )
            })
          }
        </Slider>
      </div>
    )
  }
}