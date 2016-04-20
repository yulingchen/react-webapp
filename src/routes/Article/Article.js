import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'
import { StyleSheet, css } from 'aphrodite'
import Helmet from 'react-helmet'

import { loadPost } from './actions'

const redial = {
  fetch: ({ dispatch, params: { aid } }) => dispatch(loadPost(aid)),
}

const mapStateToProps = state => ({
  article: state.currentPost.article,
  isLoading: state.currentPost.isLoading,
  error: state.currentPost.error
})

const Article = ({ article, isLoading, error }) => {
  return <div><span>article</span></div>
}

Article.propTypes = {
  article: PropTypes.object,
  isLoading: PropTypes.bool,
  error: PropTypes.object
}

const styles = StyleSheet.create({
  body: {
    fontSize: '1.25rem',
    lineHeight: '1.5',
    margin: '1rem 0',
  }
})


export default provideHooks(redial)(connect(mapStateToProps)(Article))