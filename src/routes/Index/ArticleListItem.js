import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { StyleSheet, css } from 'aphrodite'

import ArticleWrap from '../../components/ArticleWrap'

const ArticleListItem = ({ data }) =>
  <Link className={css(styles.link)}
        to={`/post/cloth-talk-part-i`}>
    <ArticleWrap data={data} />
  </Link>

const styles = StyleSheet.create({
  link: {
    ':visited': {
      color: '#999'
    }
  }
})

export default ArticleListItem