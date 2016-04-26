import React, { PropTypes, Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { provideHooks } from 'redial'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Tabs from 'material-ui/lib/tabs/tabs'
import Tab from 'material-ui/lib/tabs/tab'
import Slider from 'material-ui/lib/slider'

import { loadArticles } from './actions'
import { mixinArticle } from '../Article/actions'
import { Color } from '../../style'
import Scroll from '../../components/Scroll'
import ArticleListItem from './components/ArticleListItem'

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

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props.route} was activated.`);
}

const TabsExampleSimple = () => (
  <Tabs>
    <Tab label="那么" >
1
    </Tab>
    <Tab label="Item Two" >
2
    </Tab>
    <Tab label="onActive">
3
    </Tab>
    <Tab label="那么" >
1
    </Tab>
    <Tab label="Item Two" >
2
    </Tab>
  </Tabs>
)
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      slideIndex: 0,
    }
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
  handleChange = (value) => {
    console.log(value)
    this.setState({
      slideIndex: value,
    })
  }
  renderArticleWrap(props) {
    return (
      <div>
        <TabsExampleSimple />
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

Home.propTypes = {
  articles: PropTypes.array.isRequired
}

export default provideHooks(redial)(connect(mapStateToProps)(Home))