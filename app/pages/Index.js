/**
 * 首页
 *
 */

import React, { Component, PropTypes } from 'react'

import AppBar from '../components/AppBar.js'
import Link from '../components/Link.js'

import {getCityChecked} from '../utils/localStorage.js'


export default class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  renderAppBar() {
    const leftStyle = {
      fontSize: 16,
      paddingLeft: 5
    }
    const rightStyle = {
      fontSize: 16,
      paddingRight: 5
    }
    const left = <Link route="city">
                  <div style={leftStyle}>
                    <i className="ion ion-unfold icon-right">{getCityChecked() || '全国'}</i>
                  </div>
                 </Link>
    const right = <div style={rightStyle}><i className="ion ion-myfill icon-left">我的</i></div>
    return (
      <AppBar left={left} right={right} />
    )
  }

  render() {
    
    return (
      <div className="has-header">
        {this.renderAppBar()}
      </div>
    )
  }
}