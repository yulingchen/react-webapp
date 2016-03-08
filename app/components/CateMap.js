import React, { Component, PropTypes } from 'react'

import Link from '../components/Link.js'

export default class CateMap extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let data = this.props.data
    if (!data) {
      return <div></div>
    }
    return (
      <div className="cate-map">
        {
          data.map((item,index)=>{
            return (
              <div key={index}
                   className="item">
                <Link route={"/list/" + item.id}>
                  <img src={item.src} />
                </Link>
              </div>
            )
          })
        }
      </div>
    )
  }
}

CateMap.propTypes = {
  // string: PropTypes.string.isRequired,
  // array: PropTypes.array.isRequired,
  // bool: PropTypes.bool.isRequired,
  // number: PropTypes.number.isRequired,
  // func: PropTypes.func.isRequired,
  // object: PropTypes.object.isRequired
}