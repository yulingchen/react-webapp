import React, { Component, PropTypes } from 'react'

import Link from '../components/Link.js'

import { requestGoodsList } from '../actions/goods.js'

export default class AppCateWrap extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    // data [Array]
    const data = this.props.data

    // return
    if (!data)
      return <div>/</div>
    return (
      <div className="app-cate-wrap">
        {
          data.map((item,index)=>{
            return (
              <div key={index}
                   className="item">
                <Link route={"goodsCate/" + item.id}>
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