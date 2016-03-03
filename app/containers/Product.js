import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Content from '../components/Content.js'
import Nav from '../components/Nav.js'

import ProductDetail from '../components/ProductDetail.js'

import * as buyActions from '../actions/buy.js'

class Product extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const { dispatch } = this.props
    // dispatch(getProduct('01'))
  }
  render() {
    // let { commodity } = this.props.params
    const { commodity } = this.props
    return (
      <div>
        <Nav title="商品详情"
             prevName="返回">
        </Nav>
        <Content hasNav={true}>
          <ProductDetail commodity={commodity} />

        </Content>
      </div>
    )
  }
}

Product.propTypes = {
  commodity: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    commodity: state.commodity
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(buyActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)
