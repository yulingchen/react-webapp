import React, { Component, PropTypes } from 'react'

import AppBar from '../components/AppBar.js'
import Contacts from '../components/Contacts.js'

export default class Text extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <AppBar title="联系人"/>
        <div className="has-bar">
          <Contacts />
        </div>
      </div>
    )
  }
}

Text.propTypes = {
  // string: PropTypes.string.isRequired,
  // array: PropTypes.array.isRequired,
  // bool: PropTypes.bool.isRequired,
  // number: PropTypes.number.isRequired,
  // func: PropTypes.func.isRequired,
  // object: PropTypes.object.isRequired
}