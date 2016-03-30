import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import classNames from 'classnames/bind'

import {DoneSVG,ErrorSVG} from '../SVG/index.js'
import './toaster.scss'

class Toaster extends Component {
  constructor(props) {
    super(props)
    this.state = {
      display: 'none',
      status: '',
      error: ''
    }
    this.hide = this.hide.bind(this)
  }
  show(status,message) {
    clearTimeout(timer)
    this.setState({
      display: 'block',
      status: status,
      message: message
    })
    var timer = setTimeout(this.hide,3000)
  }
  hide() {
    this.setState({display: 'none'})
  }
  renderSVG(status) {
    if (status === 'waring') {
      return <ErrorSVG size={25} color="#FFF" />
    } else {
      return <DoneSVG size={25} color="#FFF" />
    }
  }
  render() {
    const {display,status,message} = this.state
    const Toaster = classNames(
      'Toaster',
      {
        'block': display === 'block'
      }
    )
    return (
      <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        <div className={Toaster}
             onClick={this.hide}>
          <p className={status || 'done'}>
            {this.renderSVG(status)}
            <span>{message}</span>
          </p>
        </div>
      </ReactCSSTransitionGroup>
    )
  }
}

Toaster.propTypes = {
  // status: PropTypes.oneOf(['done','error']),
  // message: PropTypes.string.isRequired
}

module.exports = Toaster