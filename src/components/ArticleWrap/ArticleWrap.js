import React, { PropTypes } from 'react'
import Card from 'material-ui/lib/card/card'
import CardText from 'material-ui/lib/card/card-text'

import s from './ArticleWrap.css'

const ArticleWrap = ({ data }) =>
<Card>
  <CardText className="row">
      <div className={`col-xs-${data.imageurls[0] ? 8 : 12} ${s.main}`}>
        <div className={s.full}>
          <span className={s.author}>{data.source}</span>
          <span className={s.note}>{(data.pubDate).split(" ")[0]}</span>
        </div>
        <div className={s.full}>
          <h3>{(data.title).substr(0,25)}</h3>
        </div>
        <div className={s.full,s.tags}>
          <span className={s.sign}>{data.channelName}</span>
          <span className={s.note}>阅读&sdot;</span>
          <span className={s.note}>评论&sdot;</span>
        </div>
      </div>
      {
        data.imageurls[0] &&
        <div className="col-xs-4">
          <img className={s.cover} />
        </div>
      }
  </CardText>
</Card>

export default ArticleWrap
