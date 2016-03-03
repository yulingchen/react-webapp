import React, { Component, PropTypes } from 'react'

import AppCateMap from '../components/AppCateMap.js'
import Content from '../components/Content.js'
import Nav from '../components/Nav.js'

export default class CateMap extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Nav title="分类"
             prevName="返回">
          <button className="button big">
            <i className="icon icon-my1"></i>
          </button>
          <button className="button big">
            <i className="icon icon-cart"></i>
          </button>
        </Nav>
        <Content hasNav={true}>
          <AppCateMap />
        </Content>
      </div>
    )
  }
}