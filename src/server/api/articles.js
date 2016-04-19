import { Router } from 'express'
import request from 'request'
import http from 'http'

const router = new Router()

router.post('/', (req, res) => {
  res.statusCode = 200
  const options = {
    method: 'POST',
    url: 'http://apis.baidu.com/showapi_open_bus/channel_news/search_news',
    headers: {
      apikey: '3ebc37b58ea975769f0c9f357e4067b0'
    },

    /**
     * Params: =>
     *
     * channelId
     * channelName
     * title
     * page
     */
    form: req.body.params
  }
  console.log('req.body.params======>',req.body.params)
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
