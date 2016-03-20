/**
 * 首页
 *
 */

import React, { Component, PropTypes } from 'react'

import AppBar from '../components/AppBar.js'
import Link from '../components/Link.js'
import SearchAuto from '../components/SearchAuto.js'
import Banners from '../components/Banners.js'
import CatgWraps from '../components/CatgWraps.js'

import {$q} from '../utils/server.js'
import {getCityChecked} from '../utils/localStorage.js'


export default class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {

  }

  componentDidMount() {
    $q('banners')
      .then(data => {
        this.setState({banners: data})
      })
      .catch(error => console.log(error))
    $q('catgs')
      .then(data => {
        this.setState({catgs: data})
      })
      .catch(error => console.log(error))
  }

  searchTodo(val) {
    console.log(val)
  }

  renderAppBar() {
    const leftStyle = {
      fontSize: 16,
      paddingLeft: 10
    }
    const rightStyle = {
      fontSize: 16,
      paddingRight: 10
    }
    const left = <Link route="city">
                  <div style={leftStyle}>
                    <i className="ion ion-unfold icon-right">{getCityChecked() || '全国'}</i>
                  </div>
                 </Link>
    const right = <div style={rightStyle}><i className="ion ion-myfill icon-left">我的</i></div>
    return (
      <AppBar left={left} right={right} title="团购首页" />
    )
  }
  
  renderSearchAuto() {
    return (
      <div className="padding bg-stable">
        <SearchAuto placeholder="搜索商家分类、地点、商品"
                todo={this.searchTodo.bind(this)} />
      </div>
    )
  }

  renderBanners() {
    if (this.state.banners) {
    return <Banners data={this.state.banners} />
    }
  }

  /**
   * [renderCatgWraps]
   * 
   * @return {DOM} [返回dom节点]
   * 
   * data格式:[{id:0,order:0,name:'',icon:''},...]
   * trLength tdLength 个数比例
   */
  renderCatgWraps() {
      if (this.state.catgs) {
      const mixin = {
        data: this.state.catgs,
        trLength: 4,
        tdLength: 2
      }
      return <CatgWraps {...mixin} />
    }
  }

  render() {
    
    return (
      <div className="has-header">
        {this.renderAppBar()}
        {this.renderSearchAuto()}
        {this.renderBanners()}
        {this.renderCatgWraps()}
      </div>
    )
  }
}