import https from 'https'
import events from 'events'
import querystring from 'querystring'
import wechat from 'wechat'
import WXBizMsgCrypt from 'wechat-crypto'
import parser from 'xml2json'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import { Router } from 'express'

const emitter = new events.EventEmitter()
const router = new Router()

var wxmsg = require('./middle.js')

const config = {
  token: 'sL1gSjgpDDiQUM28',
  encodingAESKey: 'nbQmilXXAJsp8FFa3GEIe7lOiACR0s4ww6r72nGr1Rx',
  corpId: 'wx4ced8252c42ff92b'
}

router.get('/', (req, res) => {
  const { msg_signature, timestamp, nonce, echostr } = req.query
  const cryptor = new WXBizMsgCrypt(config.token, config.encodingAESKey, config.corpId)
  const s = cryptor.decrypt(echostr)
})

router.post('/', (req, respon, next) => {
  const datas = {
    "corpid":'wx4ced8252c42ff92b',
    "corpsecret":'aG6T6LKJCIH2xrMGAJtI17GzEGKNvygxIv2aw8DH8uBi1H-b1uEgoGlUpRx71n94'
  }
  const content=querystring.stringify(datas)
  const options = {
    method: 'GET',
    hostname: 'qyapi.weixin.qq.com',
    path: '/cgi-bin/gettoken?' + content,
  } 
  var getacctoken = function ( options ) {
    var req = https.request(options, function (res) {
      res.setEncoding('utf8');  
      res.on('data', function (chunk) {
        var result=JSON.parse(chunk); 
      })
    })
    req.on('error', function (e) {  
      console.log(e);
      console.log('problem with request: ' + e.message)
    })
    req.end()
  }
    getacctoken(options)
    processMse(req,respon)
    next()
})

function processMse(req,res,next,tocken){
        var post_data='';
        req.on('data', function (chunk) {  
               // console.log('BODY: ' + chunk);
                post_data+=chunk;
               
        });  

        req.on('end', function () {  
            //console.log('Accept Data:'+ post_data);
            //post_data.replace(/\<[\/]?xml>/g,'');
            var user_msg=parser.toJson(post_data);
            //console.log(user_msg);
            user_msg=JSON.parse(user_msg);
            //console.log(user_msg.xml,typeof(user_msg));
            var cryptor = new WXBizMsgCrypt(config.token, config.encodingAESKey, config.corpId)
            var s = cryptor.decrypt(user_msg.xml.Encrypt);
            //console.log('s:',s);
            var result=JSON.parse(parser.toJson(s.message));
            console.log('result====>',result);
            var msgType=result['xml']['MsgType'];
            session.user = result['xml']['FromUserName'];
            switch(msgType){
                case 'event':
                 wxmsg.processEvent(result['xml'],req,res,next,tocken);break;
                case 'text':
                 wxmsg.processMsg(result['xml'],req,res,next,tocken);break;
                case 'image':
                 wxmsg.processImage(result['xml'],req,res,next,tocken);break;
                case 'video':
                 wxmsg.processVideo(result['xml'],req,res,next,tocken);break;
                case 'location':
                 wxmsg.processLocation(result['xml'],req,res,next,tocken);break;
                case 'link':
                 wxmsg.processLink(result['xml'],req,res,next,tocken);break;
                case 'voice':
                 wxmsg.processVoice(result['xml'],req,res,next,tocken);break;

            }
        }); 
};
module.exports = router