import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { StyleSheet, css } from 'aphrodite'

const PathBottomBar = ({ data }) =>
  <div className={`row middle-xs center-xs ${css(styles.pathBar)}`}>
    <div className={`col-xs ${css(styles.pathBarL)}`}>
      <div className="box">登录</div>
    </div>
    <div className="col-xs">
      <div className="box">注册</div>
    </div>
  </div>

const styles = StyleSheet.create({
  pathBar: {
    position: 'fixed',
    width: '100%',
    height: '3rem',
    bottom: 0,
    background: Color.theme,
    color: '#FFF',
    fontSize: '120%'
  },
  pathBarL: {
    borderRight: '1px solid #FFF'
  }
})

export default PathBottomBar