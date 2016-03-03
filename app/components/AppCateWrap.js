import React, { Component, PropTypes } from 'react'

export default class AppCateWrap extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('click')
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
                   className="item"
                   onClick={this.handleClick}>
                <img src={item.src} />
              </div>
            )
          })
        }
      </div>
    )
  }
}