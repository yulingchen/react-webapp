import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { initEnvironment } from '../actions/environment.js'

import * as appActions from '../actions/app.js'

import ScrollUp from '../components/ScrollUp.js'

class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const {dispatch} = this.props
    dispatch(initEnvironment())
  }

  renderToaster() {
    const { actions, toaster} = this.props
    if (!toaster) {
      return null
    }

    return (
      console.log('toaster')
    )
  }

  render() {
    const { children } = this.props
    return (
      <div>
        {this.renderToaster()}
        {children}

        <ScrollUp showUnder={500} />
      </div>
    )
  }
}

App.propTypes = {
  toaster: PropTypes.string,
  systemInfo: PropTypes.object,
  children: PropTypes.node,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  const {environment} = state
  return {
    height: environment.height,
    width: environment.width,
    isMobile: environment.isMobile,
    toaster: state.toaster,
    systemInfo: state.systemInfo
  }
}

export default connect(
  mapStateToProps
)(App)