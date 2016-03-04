import React, { Component, PropTypes } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { pathTo, PathBack } from '../actions/navigator.js'

export default class Link extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    e.preventDefault()
    const {route} = this.props
    this.context.router.push(route)
    const {dispatch} = this.props
    dispatch(pathTo(route))
  }
  render() {
    const {children, title} = this.props
    return (
      <a onClick = {this.handleClick}
         title = {title ? title : ''} >
        
        {children}

      </a>
    )
  }
}

Link.propTypes = {
  route: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  dispatch: PropTypes.func.isRequired,
  navigator: PropTypes.object.isRequired,
}
Link.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    navigator: state.navigator
  }
}

export default connect(
  mapStateToProps
)(Link)