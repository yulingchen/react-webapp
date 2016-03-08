import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Link from '../components/Link.js'
import {getJsonLength} from '../utils/func.js'

class CartIcon extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { cart } = this.props
    let typeCount =  getJsonLength(cart)
    let statusDOM
    if (typeCount > 0) {
      statusDOM = <span className="icon-status">{typeCount}</span>
    }
    return (
      <div className="cart-icon">
        <Link route="/cart">
          <i className="icon icon-cart"></i>
          {statusDOM}
        </Link>
      </div>
    )
  }
}

CartIcon.propTypes = {
  children: PropTypes.node,
}

function mapStateToProps(state) {
  const {cart} = state
  return {
    cart: cart
  }
}

export default connect(
  mapStateToProps
)(CartIcon)