import React, { Component, PropTypes } from 'react'

import Nav from '../components/Nav.js'
import Link from '../components/Link.js'
import Content from '../components/Content.js'

export default class Me extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Nav title="我"
             prevName="返回">
        </Nav>
        <Content hasNav={true}>
          <Link route="goodsCart">
            <button className="button big">
              购物车
            </button>
          </Link>
        </Content>
      </div>
    )
  }
}