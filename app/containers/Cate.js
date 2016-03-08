/**
 * 分类
 */

import React, { Component, PropTypes } from 'react'

import AppBar from '../components/AppBar.js'
import CateMap from '../components/CateMap.js'
import {$q} from '../utils/Request.js'

export default class Cate extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    $q('cate')
      .then(data => {
        this.setState({data: data})
      })
      .catch(error => console.log(error))
  }
  render() {
    const { data } = this.state
    return (
      <div>
        <AppBar title="分类"/>
        <div className="has-bar">
          <CateMap data={data} />
        </div>
      </div>
    )
  }
}

Cate.propTypes = {
  // string: PropTypes.string.isRequired,
  // array: PropTypes.array.isRequired,
  // bool: PropTypes.bool.isRequired,
  // number: PropTypes.number.isRequired,
  // func: PropTypes.func.isRequired,
  // object: PropTypes.object.isRequired
}