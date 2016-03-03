import React, { Component, PropTypes } from 'react'
import classNames from 'classnames/bind'

import Carousel from './Carousel.js'

export default class ProductDetail extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
  }
  handleClick(e) {
    e.preventDefault()
    console.log()
  }
  render() {
    const {commodity} = this.props
    let carousel = {
      data: commodity.description.gallery,
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
        <Carousel {...carousel} />
        <div className="des">
          <div><h1>{commodity.description.title}</h1></div>
          <div>¥<span className="price">50</span>元<s>100元</s></div>
          <div className="content">{commodity.description.subtitle}</div>
        </div>
        <div className="choose">
          <div>请选择</div>
          <div className="pcolor">
            {
              commodity.attribute.map((item,index)=>{
                return <span>{item.name}</span>
              })
            }
          </div>
          <div className="count">
            <button className={cutBtnClass}><i className="icon icon-move"></i></button>
            <span>数量</span>
            <button className={addBtnClass}><i className="icon icon-add"></i></button>
          </div>
          <div>剩余：</div>
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
          <div className="cart">加入购物车</div>
          <div className="buy">立即购买</div>
        </div>
      </div>
    )
  }
}