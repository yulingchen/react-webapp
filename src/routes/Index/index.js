import React, { PropTypes, Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { provideHooks } from 'redial'
import { connect } from 'react-redux'

import { loadArticles } from './actions'

import { Color } from '../../style'
import { QQSVG } from '../../components/SVG'
import ArticleWrap from '../../components/ArticleWrap'
import Scroll from '../../components/Scroll'

const redial = {
  fetch: ({ dispatch, getState }) => {
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

class Index extends Component {
  constructor(props) {
    super(props)
    this.getMoreData = this.getMoreData.bind(this)
  }
  getMoreData(){
    const { allPages, currentPage } = this.props
    if (currentPage < allPages) {
      this.props.dispatch(loadArticles(currentPage + 1))
    }
  }
  renderArticleWrap(props) {
    return props.map((item, key) =>
      <ArticleWrap key={key} data={item} />
    )
  }
  renderPathBar() {
    return (
      <div className={`row middle-xs center-xs ${css(styles.pathBar)}`}>
        <div className={`col-xs ${css(styles.pathBarL)}`}>
          <div className="box">登录</div>
        </div>
        <div className="col-xs">
          <div className="box">注册</div>
        </div>
      </div>
    )
  }

  render() {
    const { articles, isLoading } = this.props
    return (
      <Scroll infinite={this.getMoreData} isLoading={isLoading} >
        <div className={css(styles.index)}>
          {this.renderArticleWrap(articles)}
        </div>
      </Scroll>
    )
  }
}

Index.propTypes = {
  articles: PropTypes.array.isRequired
}

const styles = StyleSheet.create({
  index: {
    paddingBottom: '3rem'
  },
  pathBar: {
    position: 'fixed',
    width: '100%',
    height: '3rem',
    bottom: 0,
    background: Color.theme,
    color: '#FFF',
    fontSize: '120%'
  },
  pathBarL: {
    borderRight: '1px solid #FFF'
  }
})

export default provideHooks(redial)(connect(mapStateToProps)(Index))