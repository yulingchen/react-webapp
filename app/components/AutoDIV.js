import React, { Component, PropTypes } from 'react'

export default class AutoDIV extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="auto-div">
        <img className="auto-div-img"
             src="http://caixie.net/react/static/autoDIV.png" />
        <div className="box">
          {this.props.children}
        </div>
      </div>
    )
  }
}