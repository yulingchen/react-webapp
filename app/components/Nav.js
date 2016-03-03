import React, { Component, PropTypes } from 'react'
import classNames from 'classnames/bind'

export default class Nav extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    e.preventDefault()

    const {back,go} = this.props
    if (go) {
      this.context.router.push(go)
    } else {
      this.context.router.goBack()
    }
  }
  render() {
    const {title,prevIcon,prevName} = this.props

    // default icon style
    let ICON
    prevIcon ? ICON = 'icon-' + prevIcon : ICON = 'icon'
    const iconClass = classNames(
      ICON,
      {
        'icon': prevIcon,
        'icon-back': !prevIcon
      }
    )

    return (
      <div className="nav">
        <div className="nav-back">
          <button className="button"
                  onClick={this.handleClick}>
            <i className={iconClass}></i>
          </button>
          {prevName}
        </div>
        <h1>{title}</h1>
        <div className="nav-btn">
          {this.props.children}
        </div>
      </div>
    )
  }
}

Nav.contextTypes = {
  router: React.PropTypes.object.isRequired
}