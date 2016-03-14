import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ScrollUp from '../components/ScrollUp.js'

import { initEnvironment } from '../actions/environment.js'

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const {dispatch} = this.props
    dispatch(initEnvironment())
  }
  render() {
    const { children } = this.props
    return (
      <div>
        {children}
        <ScrollUp showUnder={500} />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  const {environment} = state
  return {
    height: environment.height,
    width: environment.width,
    isMobile: environment.isMobile
  }
}

export default connect(
  mapStateToProps
)(App)