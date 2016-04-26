import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'
import Card from 'material-ui/lib/card/card'
import CardText from 'material-ui/lib/card/card-text'

import { Color } from '../style'

const ArticleWrap = ({ data }) =>
<Card>
  <CardText className="row">
      <div className={`col-xs-${data.imageurls[0] ? 8 : 12} ${css(styles.main)}`}>
        <div className={css(styles.full)}>
          <span className={css(styles.author)}>{data.source}</span>
          <span className={css(styles.note)}>{(data.pubDate).split(" ")[0]}</span>
        </div>
        <div className={css(styles.full, styles.title)}>
          <h3>{(data.title).substr(0,25)}</h3>
        </div>
        <div className={css(styles.full, styles.tags)}>
          <span className={css(styles.sign)}>{data.channelName}</span>
          <span className={css(styles.note)}>阅读&sdot;</span>
          <span className={css(styles.note)}>评论&sdot;</span>
        </div>
      </div>
      {
        data.imageurls[0] &&
        <div className="col-xs-4">
          <img className={css(styles.cover)} src={data.imageurls[0].url} />
        </div>
      }
  </CardText>
</Card>
const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignContent: 'space-around'
  },
  full: {
    width: '100%'
  },
  author: {
    color: Color.name,
    marginLeft: '8px'
  },
  note: {
    color: Color.note,
    marginLeft: '8px'
  },
  title: {
    paddingTop: '.8rem'
  },
  tags: {
    paddingTop: '.8rem'
  },
  cover: {
    width: '100%',
    maxHeight: '100px'
  },
  sign: {
    color: Color.theme,
    border: `1px solid ${Color.theme}`,
    padding: '2px 5px'
  }
})

export default ArticleWrap
