/**
 * 首页
 *
 */

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AppBar from '../components/AppBar.js'
import GoodsList from '../components/GoodsList.js'
import Link from '../components/Link.js'
import CartIcon from '../components/CartIcon.js'
import {$q} from '../utils/Request.js'

import Wrapper from '../components/Wrapper.js'

export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount() {
    $q('carousel')
      .then(data => {
        this.setState({carousel: data})
      })
      .catch(error => console.log(error))
    $q('goodslist')
      .then(data => {
        this.setState({goodslist: data})
      })
      .catch(error => console.log(error))
    $q('wrapper')
      .then(data => {
        this.setState({wrapper: data})
      })
      .catch(error => console.log(error))
  }
  componentDidMount() {

  }
  renderWrapper(wrapper) {
    if (wrapper.data) {
      return <Wrapper {...wrapper} />
    }
  }
  render() {
    const {goodslist} = this.state
    const carousel = {
      data: this.state.carousel,
      width: '100%',
      height: 'auto'
    }

    const wrapper = {
      data: this.state.wrapper,
      trLength: 4,
      tdLength: 2
    }
    return (
      <div>
        <AppBar title="shopping"
                prevName=""
                prevIcon="sort"
                back=""
                go="cate">
          <CartIcon />
        </AppBar>
        <div className="has-bar">
          {this.renderWrapper(wrapper)}
          <GoodsList data={goodslist} />
        </div>
      </div>
    )
  }
}