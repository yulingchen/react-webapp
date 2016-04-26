import { Router } from 'express'
import request from 'request'

const router = new Router()

router.post('/', (req, res) => {
  res.statusCode = 200
  const options = {
    method: 'POST',
    url: 'http://route.showapi.com/109-35',
    /**
     * Params: =>
     *
     * channelId
     * channelName
     * title
     * page
     */
    form: {
      showapi_appid: '18270',
      showapi_sign: 'c6c9ffa3d23941488e13a4a9f1a14ce6',
      ...req.body.params
    }
  }
  request(options,function (err,resp) {
    const data = JSON.parse(resp.body)
    console.log('data222222222====>',data)
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
