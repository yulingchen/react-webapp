import React, { Component, PropTypes } from 'react'

export default class AppGoodWrap extends Component {
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
      <div className="app-good-wrap">
        {
          data.map((item,index)=>{
            return (
              <div key={index}
                   className="item">
                <div className="tag">
                  <i className="icon icon-tag"></i>{item.tag}
                </div>
                <div className="img"><img src={item.src} /></div>
                <div>
                  <h1>{item.title}</h1>
                </div>
                <div>
                  <i>¥<span>{item.price}</span>元起</i>
                  <span>{item.cut}</span>折
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}