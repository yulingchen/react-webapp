import React, { Component, PropTypes } from 'react'

export default class Link extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    e.preventDefault()
    const {route} = this.props
    this.context.router.push(route)
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
  title: PropTypes.string
}
Link.contextTypes = {
  router: React.PropTypes.object.isRequired
}