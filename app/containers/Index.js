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
    this.state = {
      carousel: '',
      appvipwrap: '',
      appcatewrap: '',
      appgoodwrap: ''
    }
  }
  componentDidMount() {
    this.props.actions.request('Carousel')
    this.props.actions.request('Appvipwrap')
    this.props.actions.request('Appcatewrap')
    this.props.actions.request('Appgoodwrap')
    // const { dispatch, selectedReddit } = this.props
    // dispatch(fetchPostsIfNeeded(selectedReddit))
    $q('Carousel')
      .then(data => {
        this.setState({carousel: data.data})
      })
      .catch(error => console.log(error))

    $q('Appvipwrap')
      .then(data => {
        this.setState({appvipwrap: data.data})
      })
      .catch(error => console.log(error))

    $q('Appcatewrap')
      .then(data => {
        this.setState({appcatewrap: data.data})
      })
      .catch(error => console.log(error))

    $q('Appgoodwrap')
      .then(data => {
        this.setState({appgoodwrap: data.data})
      })
      .catch(error => console.log(error))
  }
  render() {
    const carousel = {
      data: this.state.carousel,
      width: '100%',
      height: 'auto'
    }
    const appvipwrap = this.state.appvipwrap
    const appcatewrap = this.state.appcatewrap
    const appgoodwrap = this.state.appgoodwrap
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
          <Link route="cart">
            <button className="button big" onClick={this.handleClick}>
              <i className="icon icon-cart"></i>
            </button>
          </Link>
        </Nav>
        <Content hasNav={true}>
          <Carousel {...carousel} />
          <AppVipWrap data={appvipwrap} />
          <AppCateWrap data={appcatewrap} />
          <AppGoodWrap data={appgoodwrap} />
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