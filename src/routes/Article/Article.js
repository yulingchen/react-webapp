import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { provideHooks } from 'redial'
import Helmet from 'react-helmet'

import AppBar from 'material-ui/lib/app-bar'
import Card from 'material-ui/lib/card/card'
import CardText from 'material-ui/lib/card/card-text'
import CircularProgress from 'material-ui/lib/circular-progress'
import IconButton from 'material-ui/lib/icon-button'
import NavigationArrowBack from 'material-ui/lib/svg-icons/navigation/arrow-back'

import { Color } from '../../style'

import { loadPost } from './actions'

const redial = {
  fetch: ({ dispatch, params: { title } }) => dispatch(loadPost(title)),
}

const mapStateToProps = state => ({
  article: state.currentArticle.article,
  isLoading: state.currentArticle.isLoading,
  error: state.currentArticle.error
})

class Article extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { article, isLoading, error } = this.props
    return (
      <Card>
        <AppBar iconElementLeft={
          <IconButton onClick={() => this.context.router.goBack()}>
            <NavigationArrowBack />
          </IconButton>
        } />
        {
          !(isLoading || error) &&
          <CardText className="row">
            <div dangerouslySetInnerHTML={{__html: article.html}} />
          </CardText>
        }
        {
          (isLoading || error) &&
          <div style={{textAlign: 'center',padding: '10px 0'}}>
            {
              (isLoading && <CircularProgress size={0.6} color={Color.theme} />) || error
            }
          </div>
        }
      </Card>
    )
  }
}

Article.propTypes = {
  article: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.string
}

Article.contextTypes = {
  router: PropTypes.object.isRequired
}

export default provideHooks(redial)(connect(mapStateToProps)(Article))