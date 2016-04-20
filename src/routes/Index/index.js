import React, { PropTypes, Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { provideHooks } from 'redial'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { loadArticles } from './actions'
import { mixinArticle } from '../Article/actions'
import { Color } from '../../style'
import Scroll from '../../components/Scroll'
import ArticleListItem from './ArticleListItem'

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
  dispatchArticle(props) {
    this.props.dispatch(mixinArticle(props))
  }
  renderArticleWrap(props) {
    return (
      <div className={css(styles.articles)}>
        {
          props.map((item, key) =>
            <ArticleListItem key={key}
                             data={item}
                             onClick={this.dispatchArticle.bind(this, item)} />
        )}
      </div>
    )
  }

  render() {
    const { articles, isLoading, error } = this.props
    return (
      <Scroll infinite={this.getMoreData} isLoading={isLoading} error={error}>
        {this.renderArticleWrap(articles)}
      </Scroll>
    )
  }
}

Index.propTypes = {
  articles: PropTypes.array.isRequired
}

const styles = StyleSheet.create({
  articles: {
    padding: '0 .5rem'
  }
})

export default provideHooks(redial)(connect(mapStateToProps)(Index))