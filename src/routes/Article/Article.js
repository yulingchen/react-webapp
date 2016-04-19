import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, css } from 'aphrodite'
import Helmet from 'react-helmet'

// const mapStateToProps = state => ({
//   currentArticle: state.currentArticle.data
// })

const Article = ({ data }) =>
  <div>
    Article
  </div>

Article.propTypes = {
  data: PropTypes.object
}

const styles = StyleSheet.create({
  body: {
    fontSize: '1.25rem',
    lineHeight: '1.5',
    margin: '1rem 0',
  }
})

export default Article

// export default connect(
//   mapStateToProps
// )(Article)