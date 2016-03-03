import React, { Component, PropTypes } from 'react'
import classNames from 'classnames/bind'

import AutoDIV from './AutoDIV.js'

export default class AppVipWrap extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    // data [Array]
    const data = this.props.data

    // return
    if (!data)
      return <div>/</div>

    return (
      <div>
        {
          data.map((item,index)=>{
            let style = {
              background: 'url("' + item.bg + '") center center no-repeat',
              backgroundSize: '100% auto'
            }
            let random = Math.ceil(Math.random()*10)
            const appVipWrapClass = classNames(
              'app-vip-wrap',
              {
                'has-left-border': index % 2 !== 0,
                'positive': [1,2].includes(random),
                'balanced': [3,4,5].includes(random),
                'calm':     [6,7,8].includes(random),
                'assertive':[9,10,0].includes(random)
              }
            )
            return (
              <div key={index}
                   style={style}
                   className={appVipWrapClass}>
                <AutoDIV>
                  <h1><span className="name">{item.name}</span>专场</h1>
                  <p>{item.des}</p>
                  <span className="next"><i className="icon icon-roundrightfill"></i></span>
                </AutoDIV>
              </div>
            )
          })
        }
      </div>
    )
  }
}