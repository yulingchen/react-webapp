import React, { Component, PropTypes } from 'react'
import classNames from 'classnames/bind'

export default class AppBar extends Component {
  constructor(props) {
    super(props)
    this.handleHistoryClick = this.handleHistoryClick.bind(this)
  }

  handleHistoryClick(e) {
    e.preventDefault()
    const {back,go} = this.props
    if (go) {
      this.context.router.push(go)
    } else {
      this.context.router.goBack()
    }
  }

  render() {
    const {title, prevIcon, prevName, children} = this.props
    let prevIconName
    prevIcon ? prevIconName = 'icon-' + prevIcon : prevIconName = 'icon'
    const prevIconClass = classNames(
      prevIconName,
      {
        'icon': prevIcon,
        'icon-back': !prevIcon
      }
    )
    return (
      <div className="app-bar">
        <div className="bar-left">
          <i className={prevIconClass}
             onClick={this.handleHistoryClick}></i>
          {prevName}
        </div>
        <div className="bar-center">
          {title}
        </div>
        <div className="bar-right">
          {children}
        </div>
      </div>
    )
  }
}
AppBar.contextTypes = {
  router: React.PropTypes.object.isRequired
}
AppBar.propTypes = {

}