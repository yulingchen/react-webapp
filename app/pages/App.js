import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Scroll2Top from '../components/Scroll2Top.js'

import { initEnvironment } from '../actions/environment.js'

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

  /**
   * App render
   * includes[children|Scroll2Top]
   */
  render() {
    const style= {
      height: '100%'
    }
    return (
      <div style={style}>
        {this.props.children}
        <Scroll2Top showUnder={10} />
      </div>
    )
  }
  
}

App.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func.isRequired
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