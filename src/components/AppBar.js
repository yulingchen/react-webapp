import React, { Component, PropTypes } from 'react'

export default class AppBar extends Component {
  
  constructor(props) {
    super(props)
    this.renderAppBarLeft = this.renderAppBarLeft.bind(this)
    this.defaultGoBack = this.defaultGoBack.bind(this)
  }

  defaultGoBack(e) {
    e.preventDefault()
    this.context.router.goBack()
  }

  renderAppBarLeft() {
    const { left } = this.props
    if (!left) {
      return <div onClick={this.defaultGoBack}>back</div>
    }
    return left
  }
  render() {
    const { title, right } = this.props
    return (
      <div className={`row between-xs middle-xs ${css(styles.bar)}`}>
        <div className="col-xs-2">
          <div className="box">
            {
              this.renderAppBarLeft()
            }
          </div>
        </div>
        <div className="col-xs-4">
          <div className={`box ${css(styles.title)}`}>
            {
              title ? title : f => f
            }
          </div>
        </div>
        <div className="col-xs-2">
          <div className="box">
            {
              right ? right : f => f
            }
          </div>
        </div>
      </div>
    )
  }
}

AppBar.contextTypes = {
  router: React.PropTypes.object.isRequired
}

AppBar.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
  title: PropTypes.string
}