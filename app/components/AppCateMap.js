import React, { Component, PropTypes } from 'react'

export default class AppCateMap extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            宝宝食品
            <ul>
              <li>食品1</li>
              <li>食品2</li>
              <li>食品3</li>
              <li>食品4</li>
            </ul>
          </li>
          <li>
            宝宝奶粉
            <ul>
              <li>奶粉1</li>
              <li>奶粉2</li>
              <li>奶粉3</li>
              <li>奶粉4</li>
            </ul>
          </li>
          <li>
            宝宝营养
            <ul>
              <li>营养1</li>
              <li>营养2</li>
              <li>营养3</li>
              <li>营养4</li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }
}