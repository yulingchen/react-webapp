import React from 'react'
import { connect } from 'react-redux'

function Test({ pushPath, children }) {
  return (
    <div>
    test
    </div>
  )
}

module.exports = connect(
  null
)(Test)