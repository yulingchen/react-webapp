import React, { Component, PropTypes } from 'react'

import {getJsonToArray} from '../utils/func.js'

export default class CartTodo extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const data = this.props.data
    const nameMap = getJsonToArray(data)

    return (
      <div className="cart">
        {
          nameMap.map((item,index)=>{
            const goods = data[item]
            return (
              <div key={index}
                   className="item">
                <div className="gallery">
                  <img src={goods.gallery} />
                </div>
                <div className="description">
                  <p>{goods.title}</p>
                  <p>套餐：{goods.attribute}</p>
                  <p>数量：{goods.count} ＊ 单价{goods.price} ＝ {goods.count*goods.price}元</p>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

CartTodo.propTypes = {
  // string: PropTypes.string.isRequired,
  // array: PropTypes.array.isRequired,
  // bool: PropTypes.bool.isRequired,
  // number: PropTypes.number.isRequired,
  // func: PropTypes.func.isRequired,
  // object: PropTypes.object.isRequired
}