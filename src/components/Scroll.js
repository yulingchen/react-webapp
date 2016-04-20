import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'

import { Color } from '../style'

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

  handleScroll(e) {
    e.preventDefault()
    if (this.getScrollTop() + this.getWindowHeight() === this.getScrollHeight() && !this.props.isLoading) {
      console.log('tootototootototootoo')
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
    const { error } = this.props
    return (
      <div>
        {this.props.children}
        {
          isLoading && 
          <div className={css(styles.loading)}>
            <div className={css(styles.sp, styles.spCircle)}></div>
          </div>
        }
        {
          error &&
          <div className={css(styles.loading)}>
            error
          </div>
        }
      </div>
    )
  }
}

Scroll.propTypes = {
  refresh: PropTypes.func,
  infinite: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string
}

const styles = StyleSheet.create({
  loading: {
    textAlign: 'center',
    padding: '.5rem 0'
  },
  sp: {
    width: '32px',
    height: '32px',
    clear: 'both',
    margin: '20px auto',
  },
  spCircle: {
    border: '4px rgba(0, 0, 0, 0.25) solid',
    borderTop: `4px ${Color.theme} solid`,
    borderRadius: '50%',
    WebkitAnimation: 'spCircRot .6s infinite linear',
    animation: 'spCircRot .6s infinite linear',
  }
})

export default Scroll