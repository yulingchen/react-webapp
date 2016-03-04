import React, { Component, PropTypes } from 'react'
import classNames from 'classnames/bind'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Carousel from './Carousel.js'

import { mixinGoodsCart, goodsCount, toCart} from '../actions/goods.js'

class ProductDetail extends Component {
  constructor(props) {
    super(props)
    this.handleSelectAtt = this.handleSelectAtt.bind(this)
    this.handleAddCount = this.handleAddCount.bind(this)
    this.handleCutCount = this.handleCutCount.bind(this)
    this.handleAddToCart = this.handleAddToCart.bind(this)
  }
  handleSelectAtt(index,item) {
    const {dispatch} = this.props
    if (item.inventory > 0) {
      dispatch(mixinGoodsCart(index))
    }
  }
  handleAddCount(e) {
    const {dispatch} = this.props
    dispatch(goodsCount(1))
  }
  handleCutCount(e) {
    const {dispatch} = this.props
    dispatch(goodsCount(-1))
  }
  handleAddToCart(e) {
    const {dispatch} = this.props
    dispatch(toCart())
  }
  render() {
    const {commodity} = this.props

    let {goodsCart} = this.props


    // return
    if (JSON.stringify(commodity).length === 2)
      return <div>/</div>

    let carousel = {
      data: commodity.gallery,
      width: '100%',
      height: '200px'
    }
    const cutBtnClass = classNames(
      'count-btn',
    )
    const addBtnClass = classNames(
      'count-btn',
    )
    return (
      <div className="product-detail">

        <div className="des">
          <div><h1>{commodity.title}</h1></div>
          <div>¥<span className="price">50</span>元<s>100元</s></div>
          <div className="content">{commodity.subtitle}</div>
        </div>
        <div className="choose">
          <div>请选择</div>
          <div className="pcolor">
            {
              commodity.attribute.map((item,index)=>{
                let style
                if (item === goodsCart) {
                  style = {
                    background: 'yellow'
                  }
                } else if (item.inventory === 0) {
                  style = {
                    color: '#E5E5E5'
                  }
                }
                return <span key={index}
                             style={style}
                             onClick={this.handleSelectAtt.bind(this,index,item)}>
                          {item.name}
                       </span>
              })
            }
          </div>
          <div className="count">
            <button onClick={this.handleCutCount}
                    className={cutBtnClass}>
              <i className="icon icon-move"></i>
            </button>
            <span>数量</span>
            <button onClick={this.handleAddCount}
                    className={addBtnClass}>
              <i className="icon icon-add"></i>
            </button>
          </div>
          <div>剩余：{goodsCart.inventory - goodsCart.cartcount}</div>
          <div>价格：{goodsCart.price || 0} * {goodsCart.cartcount || 0} = {goodsCart.price*goodsCart.cartcount || 0}</div>
        </div>
        <div className="promise">闪电发货</div>
        <div className="tag">
          <div>购买须知</div>
          <div>退货：支持14天无理由退货</div>
        </div>
        <div className="detail">
          详情
        </div>
        <div className="buy-tool">
          <div className="talk">客服</div>
          <div className="shop">店铺</div>
          <div className="collect">收藏</div>
          <div className="cart"
               onClick={this.handleAddToCart}>
            加入购物车
          </div>
          <div className="buy">立即购买</div>
        </div>
      </div>
    )
  }
}

ProductDetail.propTypes = {
  // string: PropTypes.string.isRequired,
  // array: PropTypes.array.isRequired,
  // bool: PropTypes.bool.isRequired,
  // number: PropTypes.number.isRequired,
  dispatch: PropTypes.func.isRequired,
  // object: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const {goodsCart} = state
  return {
    goodsCart: goodsCart
  }
}

export default connect(
  mapStateToProps
)(ProductDetail)