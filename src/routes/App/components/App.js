import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'
import { StyleSheet, css } from 'aphrodite'

import { connect } from 'react-redux'
import { initEnvironment } from '../actions.js'

import ScrollUp from '../../../components/ScrollUp'

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
    const right = <button>'right'</button>
    return (
      <div>
        <Helmet
          title="微信 WEBAPP"
          titleTemplate="%s - 服务端渲染" />
        {this.props.children}
        <ScrollUp showUnder={500} />
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
  }
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