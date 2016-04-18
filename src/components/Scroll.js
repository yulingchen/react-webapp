import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'

class Scroll extends Component {
  
  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    if (this.getScrollTop() + this.getWindowHeight() == this.getScrollHeight()) {
      this.props.infinite()
    }
  }

  /**
   * 滚动条在Y轴上的滚动距离
   */
  getScrollTop() {
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0
    if (document.body) {
      bodyScrollTop = document.body.scrollTop
    }
    if (document.documentElement) {
      documentScrollTop = document.documentElement.scrollTop
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop
    return scrollTop
  }

  /**
   * 文档的总高度
   */
  getScrollHeight() {
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0
    if (document.body) {
      bodyScrollHeight = document.body.scrollHeight
    }
    if (document.documentElement) {
      documentScrollHeight = document.documentElement.scrollHeight
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight
    return scrollHeight
  }

  /**
   * 浏览器视口的高度
   */
  getWindowHeight() {
    var windowHeight = 0
    if (document.compatMode == "CSS1Compat") {
      windowHeight = document.documentElement.clientHeight
    } else {
      windowHeight = document.body.clientHeight
    }
    return windowHeight
  }

  render() {
    const isLoading = this.props.isLoading || false
    return (
      <div>
        {this.props.children}
        {
          isLoading && 
          <div className={css(styles.loading)}>
            ...
          </div>
        }
      </div>
    )
  }
}

Scroll.propTypes = {
  refresh: PropTypes.func,
  infinite: PropTypes.func,
  isLoading: PropTypes.bool
}

const styles = StyleSheet.create({
  loading: {
    background: "#ccc"
  }
})

export default Scroll