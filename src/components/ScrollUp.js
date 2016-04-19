/**
 * @author  Milos Janda
 * @licence MIT
 *
 * @fix by luckcoding
 */

'use strict';

var React = require('react');
var TweenFunctions = require('tween-functions');
var SVG = require('./SVG')

var ScrollUp = React.createClass({

    data: {
        startValue: 0,
        currentTime: 0, // store current time of animation
        startTime: null,
        rafId: null
    },

    propTypes: {
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
    },

    getDefaultProps: function () {
        return {
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
    },
    getInitialState: function () {
        return {
            show: false
        }
    },
    shouldComponentUpdate: function (nextProps, nextState) {
        return nextState.show !== this.state.show;
    },
    componentDidMount: function () {
        this.handleScroll(); // initialize state
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener("wheel", this.stopScrolling, false);
        window.addEventListener("touchstart", this.stopScrolling, false);
    },

    componentWillUnmount: function () {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener("wheel", this.stopScrolling, false);
        window.removeEventListener("touchstart", this.stopScrolling, false);
    },

    handleScroll: function () {
        if (this.getScrollTop() > this.props.showUnder) {
            this.setState({show: true});
        } else {
            this.setState({show: false});
        }
    },
    handleClick: function () {
        
        this.stopScrolling();
        this.data.startValue = this.getScrollTop();
        this.data.currentTime = 0;
        this.data.startTime = null;
        this.data.rafId = window.requestAnimationFrame(this.scrollStep);
    },

    scrollStep: function (timestamp) {
        if (!this.data.startTime) {
            this.data.startTime = timestamp;
        }

        this.data.currentTime = timestamp - this.data.startTime;

        var position = TweenFunctions[this.props.easing](
            this.data.currentTime,
            this.data.startValue,
            this.props.topPosition,
            this.props.duration
        );

        if (this.getScrollTop() <= this.props.topPosition) {
            this.stopScrolling();
        } else {
            window.scrollTo(this.getScrollTop(), position);
            this.data.rafId = window.requestAnimationFrame(this.scrollStep);
        }
    },

    stopScrolling: function () {
        window.cancelAnimationFrame(this.data.rafId);
    },
    /**
    * 滚动条在Y轴上的滚动距离
    */
    getScrollTop: function() {
        var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0
        if (document.body) {
            bodyScrollTop = document.body.scrollTop
        }
        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop
        return scrollTop
    },
    render: function () {
        var propStyle = this.props.style;
        var element =
            <div style={propStyle} onClick={this.handleClick}>
                <span><SVG name="ChevronUpCircle" /></span>
            </div>;

        var style = Object.assign({}, propStyle);
        style.opacity = this.state.show ? 0.8 : 0;
        style.visibility = this.state.show ? 'visible' : 'hidden';
        style.transitionProperty = 'opacity, visibility';

        return React.cloneElement(element, {style: style});
    }
});

module.exports = ScrollUp; 