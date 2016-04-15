import { Router } from 'express'
import request from 'request'
import http from 'http'

const router = new Router()

router.get('/', (req, res) => {
  res.statusCode = 200
  const options = {
    method: 'GET',
    url: 'http://apis.baidu.com/showapi_open_bus/channel_news/search_news',
    headers: {
      apikey: '3ebc37b58ea975769f0c9f357e4067b0'
    }
  }
  request(options,function (err,resp) {
    const data = JSON.parse(resp.body)
    if (data.showapi_res_code === 0) {
      if (data.showapi_res_body.ret_code === 0) {
        res.json(data.showapi_res_body.pagebean)
      }
    } else {
      res.json({error: 'error'})
    }
  })
})

module.exports = router
