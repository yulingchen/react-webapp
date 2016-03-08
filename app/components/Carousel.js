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
    if (!data) {
      return <div></div>
    }
    return (
      <Slider {...settings}>
        {
          data.map((item,index)=>{
            return (
              <div key={index}>
                <Link route={"/detail/" + item.id}>
                  <img style={carouselClass}
                       src={item.gallery}/>
                </Link>
              </div>
            )
          })
        }
      </Slider>
    )
  }
}

Carousel.propTypes = {
  // data: PropTypes.array.isRequired
}