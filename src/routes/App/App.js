import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

/**
 * material-ui server render
 */
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme'
import themeDecorator from 'material-ui/lib/styles/theme-decorator'
import colors from 'material-ui/lib/styles/colors'
import injectTapEventPlugin from 'react-tap-event-plugin'

import { connect } from 'react-redux'
import { initEnvironment } from './actions.js'

import ScrollUp from '../../components/ScrollUp'

injectTapEventPlugin()

class App extends Component {
  constructor(props) {
    super(props)
  }
  /**
   * diapatch environment
   */
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(initEnvironment())
  }
  render() {
    return (
      <div>
        <Helmet
          title="微信 WEBAPP"
          titleTemplate="%s - 服务端渲染" />
        {this.props.children}
        <ScrollUp showUnder={500} />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { environment } = state
  return {
    height: environment.height,
    width: environment.width,
    isMobile: environment.isMobile
  }
}

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: colors.green500,
    primary2Color: colors.green700,
    primary3Color: colors.green100,
  },
  fontFamily: 'Arial,Helvetica,sans-serif',
}, {
  avatar: {
    borderColor: null,
  },
  userAgent: false
  // userAgent: 'all'
})

export default connect(
  mapStateToProps
)(themeDecorator(muiTheme)(App))