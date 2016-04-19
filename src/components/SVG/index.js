"use strict";

import React, { Component, PropTypes } from 'react'

class SVG extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const name = this.props.name
    const size = this.props.size || 32
    const color = this.props.color || '#000'
    return (
      <svg width={size} height={size} viewBox="0 0 1024 1024">
        <path fill={color} d={require(`./${name}`)} ></path>
      </svg>
    )
  }
}

SVG.propTypes = {
  name: PropTypes.oneOf([
      'ChevronUp','ChevronDown','ChevronRight','ChevronDown',
      'ChevronUpCircle','ChevronDownCircle','ChevronRightCircle','ChevronDownCircle',
    ]),
  color: PropTypes.string,
  size: PropTypes.number
}

module.exports = SVG
