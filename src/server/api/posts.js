import { Router } from 'express'
import request from 'request'
const router = new Router()

// Remove this
import fakeDB from '../fakeDB.js';

router.get('/', (req, res) => {
  res.statusCode = 200
  res.json(fakeDB);
  // const options = {
  //   method: 'GET',
  //   url: 'http://apis.baidu.com/showapi_open_bus/channel_news/search_news',
  //   headers: {
  //     apikey: '3ebc37b58ea975769f0c9f357e4067b0'
  //   }
  // }
  // request(options,function (err, res, body) {
  //   console.log(res)
  //   res.json(body)
  // })
})

module.exports = router
