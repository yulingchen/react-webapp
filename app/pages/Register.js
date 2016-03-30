import React, { Component, PropTypes } from 'react'

import {DoneSVG,WeiXinSVG,QQSVG} from '../components/SVG/'
import {inputStyle} from './style'

import 'isomorphic-fetch'

import {$q} from '../utils/server.js'

const cardStyle = {
  position: 'absolute',
  width: '80%',
  left: '10%',
  top: '15%',
  textAlign: 'center'
}
const formStyle = {
  padding: '20px 30px'
}
const otherStyle = {
  padding: '20px 30px'
}

const logoStyle = {
  marginTop: '30px',
  width: '80px'
}

const cBtnStyle = {
  marginTop: '10px',
  background: '#4DD17D',
  color: '#FFF'
}

export default class Register extends Component {

  constructor(props) {
    super(props)
  }

  handleSubmit(e) {
    e.preventDefault()
    // this.refs.reg.reset()
    const email = this.refs.email.value
    const password = this.refs.password.value

    if (!email) {
      console.log('请输入邮箱')
      return
    }else if (!password) {
      console.log('请输入密码')
      return
    }else if(password.length < 6){
      console.log('密码长度过小')
      return
    }

    $q('path/register',{"email": email,"password": password}).then(function (data) {
      console.log(data)
    },function (error) {
      console.log(error)
    })

    // fetch('http://localhost:3030/shopping/path/register', {
    //   method: 'post',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     "email": email,
    //     "password": password
    //   })
    // }).then(response => response.json()).then(data => {
    //   console.log(data)
    // }).catch(error => console.log(error))
  }

  renderRegister() {
    return (
      <form className="pure-form"
            style={formStyle}
            ref='reg'
            onSubmit={this.handleSubmit.bind(this)}>
        <input ref='email'
               type="email"
               className="input-clear"
               placeholder="邮箱" />
        <input ref='password'
               type="password"
               className="input-clear"
               placeholder="密码" />
        <button style={cBtnStyle}
                className="pure-button button-full">
          <DoneSVG color="#FFF" />
        </button>
      </form>
    )
  }

  render() {
    return (
      <div className="page-gradient">
        <div style={cardStyle}
             className="card-shadow">
          <img style={logoStyle} src="../static/logo.png" />
          {this.renderRegister()}
          <div style={otherStyle}>
            <div className="pure-button button-clear">
              <WeiXinSVG color="#4EA7D1" />
            </div>
            <div className="pure-button button-clear">
              <QQSVG color="#BB4949" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Register.propTypes = {
  // string: PropTypes.string.isRequired,
  // array: PropTypes.array.isRequired,
  // bool: PropTypes.bool.isRequired,
  // number: PropTypes.number.isRequired,
  // func: PropTypes.func.isRequired,
  // object: PropTypes.object.isRequired
}