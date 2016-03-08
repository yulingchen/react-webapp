/**
 * 购物车
 */

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AppBar from '../components/AppBar.js'
import CartTodo from '../components/CartTodo.js'

class Cart extends Component {
  constructor(props) {
    super(props)

  }
  componentDidMount() {

  }
  render() {
    const {cart} = this.props
    return (
      <div>
        <AppBar title="购物车"/>
        <div className="has-bar">
          <CartTodo data={cart} />
        </div>
      </div>
    )
  }
}

Cart.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  const {cart} = state
  return {
    cart: cart
  }
}

export default connect(
  mapStateToProps
)(Cart)