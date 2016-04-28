import React, { Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'
import CircularProgress from 'material-ui/lib/circular-progress'
import RefreshIndicator from 'material-ui/lib/refresh-indicator'

import { getScrollTop, getScrollHeight, getWindowHeight } from '../utils/WindowDocument'

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
    if (getScrollTop() + getWindowHeight() === getScrollHeight() && !this.props.isLoading) {
      this.props.doInfinite()
    }
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