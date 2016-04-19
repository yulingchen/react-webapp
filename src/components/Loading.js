import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Color } from '../style'

const Loading = ({ data }) =>
  <div className={`row ${css(styles.wrap)}`}>

  </div>

Loading.PropTypes = {
  types: PropTypes.oneOf(['test'])
}

const styles = StyleSheet.create({
  wrap: {
    padding: '2rem 0',
    borderBottom: `1px solid ${Color.line}`
  }
})


export default Loading
