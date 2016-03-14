import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import AppBar from '../components/AppBar.js'
import Contacts from '../components/Contacts.js'

class Contact extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {height} = this.props
    const setting = {
      height: height
    }
    return (
      <div>
        <AppBar title="联系人"/>
        <div className="has-bar">
          <Contacts {...setting} />
        </div>
      </div>
    )
  }
}

Contact.propTypes = {
  // string: PropTypes.string.isRequired,
  // array: PropTypes.array.isRequired,
  // bool: PropTypes.bool.isRequired,
  // number: PropTypes.number.isRequired,
  // func: PropTypes.func.isRequired,
  // object: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const {environment} = state
  return {
    height: environment.height
  }
}

export default connect(
  mapStateToProps
)(Contact)