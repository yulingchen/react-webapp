import React, { PropTypes, Component } from 'react'
import TweenFunctions from 'tween-functions'
import IconButton from 'material-ui/lib/icon-button'
import NavigationArrowUpward from 'material-ui/lib/svg-icons/navigation/arrow-upward'

import { Color } from '../style'
import { getScrollTop } from '../utils/WindowDocument'

class ScrollUp extends Component {

  static defaultProps = {
    duration: 250,
    easing: 'easeOutCubic',
    style: {
      position: 'fixed',
      bottom: 50,
      right: 30,
      // cursor: 'pointer',
      transitionDuration: '0.3s',
      transitionTimingFunction: 'linear',
      transitionDelay: '0s',

      display: 'block',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      lineHeight: '50px',
      textAlign: 'center',
      fontSize: '45px',
      color: '#F06066',
      overflow: 'hidden',
      zIndex: '9999'
    },
    topPosition: 0
  }

  constructor(props) {
    super(props)
    this.data = {
      startValue: 0,
      currentTime: 0, // store current time of animation
      startTime: null,
      rafId: null
    }
    this.state = {
      show: false
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.scrollStep = this.scrollStep.bind(this)
    this.stopScrolling = this.stopScrolling.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.show !== this.state.show
  }

  componentDidMount() {
    this.handleScroll() // initialize state
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener("wheel", this.stopScrolling, false)
    window.addEventListener("touchstart", this.stopScrolling, false)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener("wheel", this.stopScrolling, false)
    window.removeEventListener("touchstart", this.stopScrolling, false)
  }

  handleScroll() {
    if (getScrollTop() > this.props.showUnder) {
      this.setState({show: true})
    } else {
      this.setState({show: false})
    }
  }

  handleClick() {
    this.stopScrolling()
    this.data.startValue = getScrollTop()
    this.data.currentTime = 0
    this.data.startTime = null
    this.data.rafId = window.requestAnimationFrame(this.scrollStep)
  }

  scrollStep(timestamp) {
    if (!this.data.startTime) {
      this.data.startTime = timestamp
    }

    this.data.currentTime = timestamp - this.data.startTime

    let position = TweenFunctions[this.props.easing](
      this.data.currentTime,
      this.data.startValue,
      this.props.topPosition,
      this.props.duration
    )

    if (getScrollTop() <= this.props.topPosition) {
      this.stopScrolling()
    } else {
      window.scrollTo(getScrollTop(), position)
      this.data.rafId = window.requestAnimationFrame(this.scrollStep)
    }
  }

  stopScrolling() {
    window.cancelAnimationFrame(this.data.rafId)
  }

  render() {
    const propStyle = this.props.style;
    const element =
            <div style={propStyle} onClick={this.handleClick}>
              <IconButton><NavigationArrowUpward color={Color.theme} /></IconButton>
            </div>

    var style = Object.assign({}, propStyle)
    style.opacity = this.state.show ? 0.8 : 0;
    style.visibility = this.state.show ? 'visible' : 'hidden';
    style.transitionProperty = 'opacity, visibility';

    return React.cloneElement(element, {style: style});
  }
}

ScrollUp.propTypes = {
  topPosition: React.PropTypes.number,
  showUnder: React.PropTypes.number.isRequired, // show button under this position,
  easing: React.PropTypes.oneOf(['linear', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad', 'easeInCubic',
      'easeOutCubic', 'easeInOutCubic', 'easeInQuart', 'easeOutQuart', 'easeInOutQuart', 'easeInQuint',
      'easeOutQuint', 'easeInOutQuint', 'easeInSine', 'easeOutSine', 'easeInOutSine', 'easeInExpo', 'easeOutExpo',
      'easeInOutExpo', 'easeInCirc', 'easeOutCirc', 'easeInOutCirc', 'easeInElastic', 'easeOutElastic',
      'easeInOutElastic', 'easeInBack', 'easeOutBack', 'easeInOutBack', 'easeInBounce', 'easeOutBounce',
      'easeInOutBounce']),
  duration: React.PropTypes.number, // seconds
  style: React.PropTypes.object
}

module.exports = ScrollUp; 