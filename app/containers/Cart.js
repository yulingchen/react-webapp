import React, { Component, PropTypes } from 'react'

import Nav from '../components/Nav.js'

export default class Cart extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Nav title="购物车"
             prevName="返回">
        </Nav>
      </div>
    )
  }
}