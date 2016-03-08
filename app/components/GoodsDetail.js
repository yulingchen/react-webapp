import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames/bind'

import { selectAttribute,changeCartCount,finishToCart } from '../actions/shopping.js'

let attributeStore
class GoodsDetail extends Component {
  constructor(props) {
    super(props)
    this.handleSelectAtt = this.handleSelectAtt.bind(this)
    this.handleAddCount = this.handleAddCount.bind(this)
    this.handleCutCount = this.handleCutCount.bind(this)
    this.handleSendToCart = this.handleSendToCart.bind(this)
  }

  handleSelectAtt(item) {
    if (attributeStore !== item) {
      const {dispatch} = this.props
      if (item.inventory > 0) {
        attributeStore = item
        dispatch(selectAttribute(item))
      }
    }
  }
  handleAddCount(e) {
    e.preventDefault()
    if (attributeStore) {
      const {dispatch} = this.props
      dispatch(changeCartCount(1))
    }
  }
  handleCutCount(e) {
    e.preventDefault()
    if (attributeStore) {
      const {dispatch} = this.props
      dispatch(changeCartCount(-1))
    }
  }
  handleSendToCart(e) {
    e.preventDefault()
    const {dispatch} = this.props
    dispatch(finishToCart())
  }
  render() {
    const data = this.props.shopping
    if (JSON.stringify(data).length <= 2) {
      return <div></div>
    }
    return (
      <div>
        <div className="gallery">
          <img src={data.gallery} />
        </div>
        <div className="padding">
          <p>{data.title}</p>
          <p><i className="icon icon-tag"></i><i>{data.cate}</i></p>
          <p className="note">{data.subtitle}</p>
        </div>
        <br />
        <div>
          套餐：
          {
            data.attribute.map((item,index)=>{
              const attributeClass = classNames(
                'attribute',
                {
                  'checked': item.checked === true,
                  'disable': item.inventory === 0
                }
              )
              return (
                <span key={index}
                      className={attributeClass}
                      onClick={this.handleSelectAtt.bind(this,item)}>
                  {item.name}
                </span>
              )
            })
          }
        </div>
        <br />
        <br />
        <div className="count">
          数量：
          <span onClick={this.handleAddCount}>+</span>
          {data.cartCount}
          <span onClick={this.handleCutCount}>-</span>
        </div>
        <br />
        <div>
          库存：{data.inventoryCount}
        </div>
        <div className="buy-tool">
          <div className="talk">客服</div>
          <div className="shop">店铺</div>
          <div className="collect">收藏</div>
          <div className="cart"
               onClick={this.handleSendToCart}>
            加入购物车
          </div>
          <div className="buy">立即购买</div>
        </div>
      </div>
    )
  }
}

GoodsDetail.propTypes = {
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
)(GoodsDetail)