import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Nav from '../components/Nav.js'
import Content from '../components/Content.js'
import Link from '../components/Link.js'
import AppGoodWrap from '../components/AppGoodWrap.js'

import { requestGoodsList } from '../actions/goods.js'

class GoodsCate extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    const {dispatch,params} = this.props
    console.log(params)
    dispatch(requestGoodsList(params.id))
  }
  render() {
    const {goodsList} = this.props
    return (
      <div>
        <Nav title="列表"
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
          <AppGoodWrap data={goodsList}/>
        </Content>
      </div>
    )
  }
}

GoodsCate.propTypes = {
  // string: PropTypes.string.isRequired,
  // array: PropTypes.array.isRequired,
  // bool: PropTypes.bool.isRequired,
  // number: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  // object: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const {goodsList} = state
  return {
    goodsList: goodsList
  }
}

export default connect(
  mapStateToProps
)(GoodsCate)