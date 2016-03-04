import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AppCateWrap from '../components/AppCateWrap.js'
import AppVipWrap from '../components/AppVipWrap.js'
import AppGoodWrap from '../components/AppGoodWrap.js'
import Carousel from '../components/Carousel.js'
import Content from '../components/Content.js'
import Link from '../components/Link.js'
import Nav from '../components/Nav.js'

import {$q} from '../utils/Request.js'

import * as requestActions from '../actions/request.js'

// import { selectReddit, fetchPostsIfNeeded, invalidateReddit } from '../actions/reddit.js'

class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  // componentWillMount() {
  //   this.props.actions.request('Carousel')
  //   this.props.actions.request('Appvipwrap')
  //   this.props.actions.request('Appcatewrap')
  //   this.props.actions.request('Appgoodwrap')
  // }
  componentDidMount() {
    $q('carousel')
      .then(data => {
        this.setState({carousel: data})
      })
      .catch(error => console.log(error))
    $q('goodsCate1')
      .then(data => {
        this.setState({cate01: data})
      })
      .catch(error => console.log(error))
    $q('goodsCate2')
      .then(data => {
        this.setState({cate02: data})
      })
      .catch(error => console.log(error))
    $q('goodsCate3')
      .then(data => {
        this.setState({cate03: data})
      })
      .catch(error => console.log(error))
    $q('goodsCate4')
      .then(data => {
        this.setState({cate04: data})
      })
      .catch(error => console.log(error))
  }
  render() {
    const carousel = {
      data: this.state.carousel,
      width: '100%',
      height: 'auto'
    }
    const {cate01,cate02,cate03,cate04} = this.state
    return (
      <div>
        <Nav title="首页"
             prevName=""
             prevIcon="sort"
             back=""
             go="/catemap">
          <Link route="me">
            <button className="button big">
              <i className="icon icon-my1"></i>
            </button>
          </Link>
          <Link route="goodsCart">
            <button className="button big" onClick={this.handleClick}>
              <i className="icon icon-cart"></i>
            </button>
          </Link>
        </Nav>
        <Content hasNav={true}>
          <Carousel {...carousel} />
          <AppGoodWrap data={cate01} />
          <AppGoodWrap data={cate02} />
          <AppGoodWrap data={cate03} />
          <AppGoodWrap data={cate04} />
        </Content>
      </div>
    )
  }
}

Index.propTypes = {
  prueData: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    prueData: state.prueData
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(requestActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index)