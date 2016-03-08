/**
 * 商品展示
 */

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import AppBar from '../components/AppBar.js'
import GoodsDetail from '../components/GoodsDetail.js'
import CartIcon from '../components/CartIcon.js'
import {$q} from '../utils/Request.js'
import {receiveGoods} from '../actions/shopping.js'

class Detail extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const {params} = this.props
    const requestURL = 'goods' + params.id
    $q(requestURL)
      .then(data => {
        const {dispatch} = this.props
        dispatch(receiveGoods(data))
      })
      .catch(error => console.log(error))
  }
  render() {
    const {shopping} = this.props
    return (
      <div>
        <AppBar title="详情">
          <CartIcon />
        </AppBar>
        <div className="has-bar">
          <GoodsDetail data={shopping}/>
        </div>
      </div>
    )
  }
}

Detail.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  const {shopping} = state
  return {
    shopping: shopping
  }
}

export default connect(
  mapStateToProps
)(Detail)