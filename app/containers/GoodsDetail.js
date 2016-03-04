import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Nav from '../components/Nav.js'
import Content from '../components/Content.js'
import Link from '../components/Link.js'

import ProductDetail from '../components/ProductDetail.js'

import { requestGoodsDeatil } from '../actions/goods.js'

class GoodsDetail extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const {dispatch,params} = this.props
    dispatch(requestGoodsDeatil(params.id))
  }
  render() {
    const {goodsDetail} = this.props
    return (
      <div>
        <Nav title="商品详情"
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
          <ProductDetail commodity={goodsDetail}/>
        </Content>
      </div>
    )
  }
}

GoodsDetail.propTypes = {
  // string: PropTypes.string.isRequired,
  // array: PropTypes.array.isRequired,
  // bool: PropTypes.bool.isRequired,
  // number: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  // object: PropTypes.object.isRequired
}


function mapStateToProps(state) {
  const {goodsDetail} = state
  return {
    goodsDetail: goodsDetail
  }
}

export default connect(
  mapStateToProps
)(GoodsDetail)