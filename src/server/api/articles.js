import { Router } from 'express'
import request from 'request'
import http from 'http'

const router = new Router()

router.post('/', (req, res) => {
  console.log("req.body========>",req.body)
  console.log("req.body.currentPage========>",req.body.currentPage)
  res.statusCode = 200
  // const data = JSON.stringify({
  //   page: req.body.currentPage
  // })
  // var options = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //     'Content-Length': Buffer.byteLength(data),
  //     apikey: '3ebc37b58ea975769f0c9f357e4067b0'
  //   }
  // }
  // http.request(options,function (res) {
  //   res.setEncoding('utf8')

  //   res.on('data', function (chunk) {
  //       console.log("body: " + chunk)
  //   });
  //   res.on('end',function(chunk){
  //       console.log("body: " + chunk)
  //   })
  // })
  const options = {
    method: 'POST',
    url: 'http://apis.baidu.com/showapi_open_bus/channel_news/search_news',
    headers: {
      apikey: '3ebc37b58ea975769f0c9f357e4067b0'
    },
    form: {
      page: req.body.currentPage
    }
  }
  request(options,function (err,resp) {
    const data = JSON.parse(resp.body)
    console.log('currentPage',data.showapi_res_body.pagebean.currentPage)
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
