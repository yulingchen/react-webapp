import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Color } from '../style'

const ArticleWrap = ({ data }) =>
  <div className={`row ${css(styles.wrap)}`}>
    <div className={`col-xs-8 ${css(styles.left)}`}>
      <div className={css(styles.lfItem)}>
        <img className={css(styles.img)} src="" />
        <span className={css(styles.name)}>{data.source}</span>
        <span className={css(styles.note)}>{data.pubDate}</span>
      </div>
      <div className={css(styles.lfItem)}>
        <h3>{data.title}</h3>
      </div>
      <div className={css(styles.lfItem)}>
        <span className={css(styles.tnk)}>{data.channelName}</span>
        <span className={css(styles.note)}>阅读&sdot;</span>
        <span className={css(styles.note)}>评论&sdot;</span>
        <span className={css(styles.note)}>喜欢&sdot;</span>
      </div>
    </div>
    <div className="col-xs-4">
      <img src={data.imageurls[0] ? data.imageurls[0].url : ''} />
    </div>
  </div>

const styles = StyleSheet.create({
  wrap: {
    padding: '2rem 0',
    borderBottom: `1px solid ${Color.line}`
  },
  left: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignContent: 'space-around'
  },
  lfItem: {
    width: '100%'
  },
  img: {
    width: '2rem',
    borderRadius: '50%'
  },
  name: {
    color: Color.name,
    marginLeft: '8px'
  },
  note: {
    color: Color.note,
    marginLeft: '8px'
  },
  tnk: {
    color: Color.theme,
    border: `1px solid ${Color.theme}`,
    borderRadius: '10px',
    padding: '3px 5px'
  }
})

export default ArticleWrap
