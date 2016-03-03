import React, { Component, PropTypes } from 'react'
import classNames from 'classnames/bind'

export default class Content extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const contentClass = classNames(
      "content",
      {
        "has-nav": this.props.hasNav === true
      }
    )
    return (
      <div className={contentClass}>
        {this.props.children}
      </div>
    )
  }
}