import React, { Component, PropTypes } from 'react'

import AppCateMap from '../components/AppCateMap.js'
import Content from '../components/Content.js'
import Link from '../components/Link.js'
import Nav from '../components/Nav.js'

import AppCateWrap from'../components/AppCateWrap.js'
import {$q} from '../utils/Request.js'

export default class CateMap extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  componentDidMount() {
    $q('cate')
      .then(data => {
        this.setState({cate: data})
      })
      .catch(error => console.log(error))
  }
  render() {
    const {cate} = this.state
    return (
      <div>
        <Nav title="分类"
             prevName="返回">
          <button className="button big">
            <i className="icon icon-my1"></i>
          </button>
          <Link route="goodsCart">
            <button className="button big">
              <i className="icon icon-cart"></i>
            </button>
          </Link>
        </Nav>
        <Content hasNav={true}>
          <AppCateWrap data={cate}/>
        </Content>
      </div>
    )
  }
}