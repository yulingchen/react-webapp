import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'
import CircularProgress from 'material-ui/lib/circular-progress'
import RefreshIndicator from 'material-ui/lib/refresh-indicator'

import { Color } from '../style'

class Scroll extends Component {
  
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = (e) => {
    e.preventDefault()
    if (this.getScrollTop() + this.getWindowHeight() === this.getScrollHeight() && !this.props.isLoading) {
      this.props.doInfinite()
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
    const isRefresh = this.props.isRefresh || false
    const { isError } = this.props
    return (
      <div>
        {
          isRefresh &&
          <div style={{textAlign: 'center'}}>
            <RefreshIndicator size={40} left={0} top={0} status="loading"
                              style={{display: 'inline-block',position: 'relative'}} />
          </div>
        }
        {this.props.children}
        <div style={{textAlign: 'center',minHeight: '60px'}}>
          {
            isLoading &&
            <CircularProgress size={0.6} color={Color.theme} />
          }
        </div>
        {
          isError &&
          <div className={css(styles.loading)}>
            isError
          </div>
        }
      </div>
    )
  }
}

Scroll.propTypes = {
  isRefresh: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.string,
  doRefresh: PropTypes.func,
  doInfinite: PropTypes.func,
}

const styles = StyleSheet.create({
  loading: {
    textAlign: 'center',
    padding: '.5rem 0'
  }
})

export default Scroll