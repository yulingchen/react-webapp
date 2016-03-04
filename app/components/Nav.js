import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'

import * as navigatorActions from '../actions/navigator.js'

class Nav extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    // this.props.actions.pathBack()
  }
  handleClick(e) {
    e.preventDefault()
    // this.props.actions.pathBack()
    // const {back} = this.props.navigator
    // console.log(back)
    // if (back > 0) {
    //   this.context.router.goBack(-back)
    // }
    const {back,go} = this.props
    if (go) {
      this.context.router.push(go)
    } else {
      this.context.router.goBack()
    }
  }
  render() {
    const {title,prevIcon,prevName,goodsTocart} = this.props

    const cartSign = goodsTocart.mixin.length
    let cartDOM
    if (cartSign) {
      cartDOM = <div className="cartSign">{cartSign}</div>
    }
    // default icon style
    let ICON
    prevIcon ? ICON = 'icon-' + prevIcon : ICON = 'icon'
    const iconClass = classNames(
      ICON,
      {
        'icon': prevIcon,
        'icon-back': !prevIcon
      }
    )

    return (
      <div className="nav">
        <div className="nav-back">
          <button className="button"
                  onClick={this.handleClick}>
            <i className={iconClass}></i>
          </button>
          {prevName}
        </div>
        <h1>{title}</h1>
        <div className="nav-btn">
          {this.props.children}
        </div>
        {cartDOM}
      </div>
    )
  }
}

Nav.contextTypes = {
  router: React.PropTypes.object.isRequired
}

Nav.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  const {goodsTocart} = state
  return {
    goodsTocart: goodsTocart
  }
}

export default connect(
  mapStateToProps,
)(Nav)