import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'
import { StyleSheet, css } from 'aphrodite'
import Helmet from 'react-helmet'

import AppBar from 'material-ui/lib/app-bar'
import Card from 'material-ui/lib/card/card'
import CardText from 'material-ui/lib/card/card-text'

import { loadPost } from './actions'

const redial = {
  fetch: ({ dispatch, params: { title } }) => dispatch(loadPost(title)),
}

const mapStateToProps = state => ({
  article: state.currentArticle.article,
  isLoading: state.currentArticle.isLoading,
  error: state.currentArticle.error
})

const Article = ({ article, isLoading, error }) =>
<Card>
  <AppBar />
  <CardText className="row">
    <div dangerouslySetInnerHTML={{__html: article.html}} />
  </CardText>
</Card>


Article.propTypes = {
  article: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.object
}

export default provideHooks(redial)(connect(mapStateToProps)(Article))