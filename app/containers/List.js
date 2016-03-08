/**
 * 商品列表
 */

import React, { Component, PropTypes } from 'react'

import AppBar from '../components/AppBar.js'
import GoodsList from '../components/GoodsList.js'
import {$q} from '../utils/Request.js'

export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    const {params} = this.props
    const requestURL = 'goodsCate' + params.id
    $q(requestURL)
      .then(data => {
        this.setState({data: data})
      })
      .catch(error => console.log(error))
  }
  render() {
    const { data } = this.state
    return (
      <div>
        <AppBar title="列表"/>
        <div className="has-bar">
          <GoodsList data={data} />
        </div>
      </div>
    )
  }
}

List.propTypes = {
  // string: PropTypes.string.isRequired,
  // array: PropTypes.array.isRequired,
  // bool: PropTypes.bool.isRequired,
  // number: PropTypes.number.isRequired,
  // func: PropTypes.func.isRequired,
  // object: PropTypes.object.isRequired
}