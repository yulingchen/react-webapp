import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Content from '../components/Content.js'
import Link from '../components/Link.js'
import Nav from '../components/Nav.js'

class GoodsCart extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {goodsTocart} = this.props
    let renderDOM
    if (goodsTocart.mixin.length > 0) {
      renderDOM = goodsTocart.mixin.map((item,index)=>{
        return (
          <div key={index}>
            <div>
              {goodsTocart[item].title}
            </div>
            <div>
              套餐：{goodsTocart[item].att} <br />
              数量：{goodsTocart[item].count}
            </div>
            <div>
              价格：{goodsTocart[item].price} * {goodsTocart[item].count} = {goodsTocart[item].price * goodsTocart[item].count}
            </div>
            <hr />
          </div>
        )
      })
    }
    return (
      <div>
        <Nav title="购物车"
             prevName="返回">
        </Nav>
        <Content hasNav={true}>
          {renderDOM}
        </Content>
      </div>
    )
  }
}

GoodsCart.propTypes = {
  // string: PropTypes.string.isRequired,
  // array: PropTypes.array.isRequired,
  // bool: PropTypes.bool.isRequired,
  // number: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  // object: PropTypes.object.isRequired
}
function mapStateToProps(state) {
  const {goodsTocart} = state
  return {
    goodsTocart: goodsTocart
  }
}

export default connect(
  mapStateToProps
)(GoodsCart)