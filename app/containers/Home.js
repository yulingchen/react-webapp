import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as appActions from '../actions/app.js'

class Home extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    let random = Math.ceil(Math.random()*10)
    this.props.actions.getToaster(random + '')
  }
  render() {
    return (
      <div>
        Home
        <button onClick={this.handleClick}>button</button>
      </div>
    )
  }
}

Home.propTypes = {
  toaster: PropTypes.string,
  // array: PropTypes.array.isRequired,
  // bool: PropTypes.bool.isRequired,
  // number: PropTypes.number.isRequired,
  // func: PropTypes.func.isRequired,
  // object: PropTypes.object.isRequired
}
function mapStateToProps(state) {
  return {
    toaster: state.toaster
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)