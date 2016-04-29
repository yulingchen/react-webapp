import React, { PropTypes, Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { provideHooks } from 'redial'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'
import Slider from 'react-slick'
import SwipeableViews from 'react-swipeable-views'
import Colors from 'material-ui/lib/styles/colors'

import { loadArticles } from './actions'
import { mixinArticle } from '../Article/actions'
import { Color } from '../../style'
import Scroll from '../../components/Scroll'
import ScrollUp from '../../components/ScrollUp'
import ArticleListItem from './components/ArticleListItem'

import { getScrollTop } from '../../utils/WindowDocument'

const redial = {
  fetch: ({ dispatch, getState }) => {
    // const channelList = getState().channelList

    const articles = getState().articles
    if (articles.data.currentPage === null) {
      return dispatch(loadArticles(1))
    }
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles.data.articles,
  allPages: state.articles.data.allPages,
  currentPage: state.articles.data.currentPage,
  isLoading: state.articles.isLoading
})

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 0
    }
  }

  doInfinite = () => {
    const { allPages, currentPage } = this.props
    if (currentPage < allPages) {
      this.props.dispatch(loadArticles(currentPage + 1))
    }
  }

  dispatchArticle(props) {
    this.props.dispatch(mixinArticle(props))
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value
    })
  }

  render() {
    const { articles, isLoading, error } = this.props
    return (
      <Scroll doInfinite={this.doInfinite}
              isLoading={isLoading}
              isError={error}>
        <Helmet title="微信 WEBAPP"
                titleTemplate="%s - 服务端渲染" />
        <Tabs onChange={this.handleChange}
              value={this.state.slideIndex}>
          <Tab label="新闻" value={0} />
        </Tabs>
        <SwipeableViews index={this.state.slideIndex}
                        onChangeIndex={this.handleChange}>
          <div>
              {
                articles.map((item, key) =>
                  <ArticleListItem key={key}
                                   data={item}
                                   onClick={this.dispatchArticle.bind(this, item)} />
              )}
          </div>
        </SwipeableViews>
        <ScrollUp showUnder={500} />
      </Scroll>
    )
  }
}

Home.propTypes = {
  articles: PropTypes.array.isRequired
}

export default provideHooks(redial)(connect(mapStateToProps)(Home))