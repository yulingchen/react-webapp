import React, { Component, PropTypes } from 'react'

import Link from '../components/Link.js'

export default class GoodsList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    // data [Array]
    let data = this.props.data
    // return
    if (!data)
      return <div></div>

    return (
      <div className="goods-list">
        {
          data.map((item,index)=>{
            return (
              <div key={index}
                   className="list-item">
                <Link route={"/detail/"+item.id}>
                  <img src={item.gallery} />
                  <p>{item.title}</p>
                  <p>价格：<b>{item.price}</b>元［{item.cut}折］</p>
                </Link>
              </div>
            )
          })
        }
      </div>
    )
  }
}

GoodsList.propTypes = {
  // string: PropTypes.string.isRequired,
  // array: PropTypes.array.isRequired,
  // bool: PropTypes.bool.isRequired,
  // number: PropTypes.number.isRequired,
  // func: PropTypes.func.isRequired,
  // object: PropTypes.object.isRequired
}