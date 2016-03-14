import React, { Component, PropTypes } from 'react'

import {json} from './data.js'

let status = {
  old: null,
  new: null
}
export default class Contacts extends Component {
  static defaultProps = {
    contacts: json,
    style: {
      box: {
        position: 'relative',
        width: '100%',
        // height: '600',
        background: '#fff',
        overflow: 'hidden'
      },
      header: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '2rem',
        lineHeight: '2rem',
        backgroundColor: '#f3f3f3',
        fontSize: 'large',
        color: '#000',
        fontWeight: 700,
        textTransform: 'uppercase',
        textIndent: '1rem',
        zIndex: 10
      },
      content: {
        display: 'block',
        width: '100%',
        // height: '600px',
        fontSize: 'normal',
        overflowY: 'auto'
      },
      nav: {
        display: '-webkit-box;display: flex',
        boxOrient: 'vertical',
        WebkitBoxOrient: 'vertical',
        WebkitBoxDirection: 'normal',
        flexDirection: 'column',
        boxPack: 'center',
        WebkitBoxPack: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
        top: 0,
        width: '1rem',
        fontSize: 'smaller',
        // height: '600px',
        background: '#fff',
        textAlign: 'center',
        zIndex: 20
      },
      group: {
        position: 'relative',
        paddingTop: '2rem',
        borderBottom: '1px solid #f3f3f3'
      },
      groupHd: {
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        lineHeight: '2rem',
        backgroundColor: '#f3f3f3',
        fontSize: 'large',
        color: '#000',
        fontWeight: 700,
        textTransform: 'uppercase',
        textIndent: '1rem'
      },
      groupBd: {
        display: 'block',
        lineHeight: '2rem',
        marginLeft: '1rem',
        borderBottom: '1px solid #f3f3f3',
        color: '#000',
        textTransform: 'capitalize'
      }
    }
  }
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      thisName: '',
      nextName: '',
      barHeight: 0
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.contactContentMove = this.contactContentMove.bind(this)
    
  }
  componentDidMount() {
    const {contacts} = this.props
    var barHeight = document.getElementById('contacts-header').offsetHeight
    this.setState({
      barHeight: barHeight,
      thisName: contacts[0].name,
      nextName: contacts[1].name
    })
    
    // var content = document.getElementById('contacts-content')
    // content.addEventListener('scroll', this.changeScroll.bind(this,content))
  }
  // componentWillUnmount() {
  //   var content = document.getElementById('contacts-content')
  //   content.removeEventListener('scroll', this.handleScroll.bind(this,content))
  // }

  changeBarStyle(status) {
    var bar = document.getElementById('contacts-header')
    bar.style.visibility = status
  }
  changeItemBarStyle(domId,status) {
    var item = document.getElementById(domId + 'Bar')
    if (status === 'isAnimated') {
      item.style.top = 'auto'
      item.style.bottom = 0
    } else {
      item.style.top = 0
      item.style.bottom = 'auto'
    }
  }
  handleScroll(scroll) {
    var DOM = document.getElementById('contacts-content')
    var scrollTop = DOM.scrollTop
    var change = Math.abs(scroll)
    for (var i = 1; i <= change; i++) {
      if (scroll < 0) {
        DOM.scrollTop = scrollTop + 1
        scrollTop = scrollTop + 1
        this.changeScroll('up')
      } else {
        DOM.scrollTop = scrollTop - 1
        scrollTop = scrollTop - 1
        this.changeScroll('down')
      }
    }
  }
  changeScroll(to) {
    const {contacts} = this.props
    const {thisName,nextName,index,barHeight} = this.state
    var scroll = document.getElementById('contacts-content').scrollTop
    if (to === 'up') {
      if (nextName) {
        var offsetTop = document.getElementById(nextName).offsetTop
        if (scroll === offsetTop - barHeight) {
          this.changeBarStyle('hidden')
          this.changeItemBarStyle(thisName,'isAnimated')
        }
        if (scroll === offsetTop) {
          this.changeBarStyle('visible')
          this.setState({
            thisName: nextName,
            nextName: contacts[index+2].name,
            index: index + 1
          })
        }
      }
    } else {
      var offsetTop = document.getElementById(thisName).offsetTop
      if (scroll === offsetTop) {
        if (index-1 >= 0 && contacts[index-1].name) {
          this.changeBarStyle('hidden')
          this.changeItemBarStyle(contacts[index-1].name,'isAnimated')
        }
      }
      if (scroll === offsetTop - barHeight) {
        this.changeBarStyle('visible')
        if (index-1 >= 0 && contacts[index-1].name) {
          this.changeItemBarStyle(contacts[index-1].name)
          this.setState({
            thisName: contacts[index-1].name,
            nextName: contacts[index].name,
            index: index - 1
          })
        }
      }
      var _offsetTop = document.getElementById(nextName).offsetTop
      if (scroll === _offsetTop - barHeight) {
        this.changeBarStyle('visible')
        if (index >= 0 && contacts[index].name) {
          this.changeItemBarStyle(contacts[index].name)
        }
      }
    }
  }
  contactContentMove(e) {
    e.preventDefault()
    const pageY = e.touches[0].pageY
    status.new = pageY
    if (status.old != status.new) {
      if (status.old === null) {
        status.old = status.new
      } else {
        var change = status.new - status.old
        this.handleScroll(change)
        status.old = status.new
      }
    }
  }
  contactContentEnd(e) {
    e.preventDefault()
    status.old = status.new = null
  }
  contactNavMove(e) {
    e.preventDefault()
    console.log(e.touches[0].pageY)
  }
  renderContactContent(props) {
    const {style} = this.props
    return props.map((item,key)=>{
      return (
        <li id={item.name}
          key={key}
          style={style.group}>
          <div id={item.name + 'Bar'}
               style={style.groupHd}>{item.name}</div>
          {
            item.cities.map((item,key)=>{
              return (
                <a key={key}
                   style={style.groupBd}>
                  {item}
                </a>
              )
            })
          }
        </li>
      )
    })
  }
  renderContactsNav(props) {
    return props.map((item,key)=>{
      return (
        <ul key={key}>
          {item.name}
        </ul>
      )
    })
  }
  
  renderContacts(props) {
    if (!props) {
      return <div></div>
    }
    const {box,header,content,nav} = this.props.style
    const {height} = this.props
    const boxStyle = {
      ...box,
      height: height - 50
    }
    const contentStyle = {
      ...content,
      height: height - 50
    }
    const navStyle = {
      ...nav,
      height: height - 50
    }
    const {thisName} = this.state
    return (
      <div id="contacts" style={boxStyle}>
        <div id="contacts-header"
             style={header}>
          {thisName}
        </div>
        <ul id="contacts-content"
            style={contentStyle}
            onTouchEnd={this.contactContentEnd}
            onTouchMove={this.contactContentMove}>
          {this.renderContactContent(props)}
        </ul>
        <ul id="contacts-nav"
            style={navStyle}
            onTouchMove={this.contactNavMove}>
          {this.renderContactsNav(props)}
        </ul>
      </div>
    )
  }

  render() {
    const {contacts} = this.props
    return (
      <div>
        {this.renderContacts(contacts)}
      </div>
    )
  }
}

Contacts.propTypes = {
  // string: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
  // bool: PropTypes.bool.isRequired,
  // number: PropTypes.number.isRequired,
  // func: PropTypes.func.isRequired,
  // object: PropTypes.object.isRequired
}