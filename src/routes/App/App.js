import React, { Component, PropTypes, Children } from 'react'

/**
 * material-ui server render
 */
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme'
import themeDecorator from 'material-ui/lib/styles/theme-decorator'
import Spacing from 'material-ui/lib/styles/spacing'
import zIndex from 'material-ui/lib/styles/zIndex'
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
    return Children.only(this.props.children);
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
    // primary2Color: colors.green700,
    // primary3Color: colors.green100,
  },
  spacing: Spacing,
  zIndex: zIndex,
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