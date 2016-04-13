import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import { StyleSheet, css } from 'aphrodite'

import { connect } from 'react-redux'
import { initEnvironment } from '../actions.js'

class App extends Component {
  constructor(props) {
    super(props)
  }
  /**
   * diapatch environment
   */
  componentDidMount() {
    const {dispatch} = this.props
    dispatch(initEnvironment())
  }
  render() {
    return (
      <div className={css(styles.root)}>
        <Helmet
          title="微信 WEBAPP"
          titleTemplate="%s - 服务端渲染" />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  root: {
    maxWidth: 700,
    color: '#000',
    margin: '2rem auto',
  },
  title: {
    color: '#000',
    maxWidth: 300,
    fontSize: 56,
  },
  footer: {
    margin: '4rem auto',
    textAlign: 'center',
    color: '#b7b7b7',
  },
  footerLink: {
    display: 'inline-block',
    color: '#000',
    textDecoration: 'none',
  },
})

function mapStateToProps(state) {
  const { environment } = state
  return {
    height: environment.height,
    width: environment.width,
    isMobile: environment.isMobile
  }
}

export default connect(
  mapStateToProps
)(App)