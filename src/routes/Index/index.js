import React, { PropTypes, Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { provideHooks } from 'redial'
import { connect } from 'react-redux'

import { loadArticles } from './actions'

import { Color } from '../../style'
import { QQSVG } from '../../components/SVG'
import ArticleWrap from '../../components/ArticleWrap'

const redial = {
  fetch: ({ dispatch }) => dispatch(loadArticles())
}

// const redial = {
//   fetch: ({ dispatch, getState}) => {
//     const articles = getState().articles
//     const allPages = articles.data.allPages
//     const currentPage = articles.data.currentPage
//                       ? articles.data.currentPage + 1
//                       : 1
//     if (currentPage <= allPages || allPages === null) {
//       return dispatch(loadArticles(currentPage))
//     }
//   }
// }

const mapStateToProps = (state) => ({
  articles: state.articles.data,
})

class Index extends Component {
  constructor(props) {
    super(props)
  }
  renderArticleWrap(props) {
    return props.map((item, key) => {
      return <ArticleWrap key={key} data={item} />
    })
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
    const articles = this.props.articles.articles
    return (
      <div className={css(styles.index)}>
        {this.renderArticleWrap(articles)}
        {this.renderPathBar()}
      </div>
    )
  }
}

Index.propTypes = {
  articles: PropTypes.object.isRequired
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
    left: 0,
    background: Color.theme,
    color: '#FFF',
    fontSize: '120%'
  },
  pathBarL: {
    borderRight: '1px solid #FFF'
  }
})

export default provideHooks(redial)(connect(mapStateToProps)(Index))