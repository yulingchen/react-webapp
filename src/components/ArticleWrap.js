import React, { PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite'
import Card from 'material-ui/lib/card/card'
import CardText from 'material-ui/lib/card/card-text'

import { Color } from '../style'

const ArticleWrap = ({ data }) =>
<Card>
  <CardText className="row">
      <div >
        <div >
          <span >{data.source}</span>
          <span >{(data.pubDate).split(" ")[0]}</span>
        </div>
        <div >
          <h3>{(data.title).substr(0,25)}</h3>
        </div>
        <div >

        </div>
      </div>
      {
        data.imageurls[0] &&
        <div className="col-xs-4">
          <img />
        </div>
      }
  </CardText>
</Card>

export default ArticleWrap
