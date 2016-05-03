import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import ArticleWrap from '../../../components/ArticleWrap/ArticleWrap'

const ArticleListItem = ({ data }) =>
  <Link 
        to={`/article/${data.title}`}>
    <ArticleWrap data={data} />
  </Link>

export default ArticleListItem