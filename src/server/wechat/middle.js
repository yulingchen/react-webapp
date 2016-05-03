var querystring = require('querystring');
var parser = require('xml2json');
var https = require('https');
var http = require('http');
exports.processMsg=function (user_msg,req,res,next,tocken) {
    var result=sendobj(user_msg,res,'Hello');
    console.log(result);
    postdata(tocken,result,res);
};
exports.processEvent=function(user_msg,req,res,next,tocken){
    var respondata={
                    "code":"200",
                    "message":"event success",
    };
    res.send(respondata);
}
exports.processImage=function (user_msg,req,res,next) {
    sendTextMsg(user_msg,res,user_msg['PicUrl']);
};
exports.processVideo=function (user_msg,req,res,next) {
    sendTextMsg(user_msg,res,'Video Message:'+user_msg['MediaId']);
};
exports.processLocation=function (user_msg,req,res,next) {
    sendTextMsg(user_msg,res,user_msg['Label']);
};
exports.processLink=function (user_msg,req,res,next) {
    //sendTextMsg(user_msg,res,user_msg['Url']);
    var respondata={
                    "code":"200",
                    "message":"update success",
    };
    res.send(respondata);
};
exports.processVoice=function (user_msg,req,res,next) {
    sendTextMsg(user_msg,res,'Voice Message:'+user_msg['MediaId']);
}
function sendTextMsg(user_msg,res,content){
    var fromUserName=user_msg['ToUserName'];
    var toUserName=user_msg['FromUserName'];
    var createTime=new Date().getTime();
    var msgType='text';
    var obj={'xml':{
        FromUserName:{'$t': fromUserName},
        ToUserName:{'$t': toUserName},
        CreateTime:{'$t': createTime},
        MsgType:{'$t': msgType},
        Content:{'$t': content}
    }};
    var xml = parser.toXml(obj);
    return xml;
}
function sendobj(user_msg,res,content){
    var fromUserName=user_msg['ToUserName'];
    var toUserName=user_msg['FromUserName'];
    var createTime=new Date().getTime();
    var msgType='text';
    var obj={
       "touser": toUserName,
       "msgtype": msgType,
       "agentid": parseInt(user_msg['AgentID']),
       "text": {
           "content": content
       },
       "safe":"0"
    };
    return obj;
}

function postdata(tocken,reqdate,respon){
    var reqdate=JSON.stringify(reqdate);
    var options = {  
        method: 'POST',
        hostname: 'qyapi.weixin.qq.com',  //https://qyapi.weixin.qq.com/cgi-bin/message/send?access_token=ACCESS_TOKEN
        //port: 80,  
        path: '/cgi-bin/message/send?access_token='+tocken,
        headers: {
            'Content-Type': "application/json",
            "Content-Length": reqdate.length 
        }   
    };  
    console.log('tocken:',tocken,'reqdate:',reqdate);
    var req = https.request(options, function (res) {  
        //console.log('STATUS: ' + res.statusCode);  
        //console.log('HEADERS: ' + JSON.stringify(res.headers));  
        res.setEncoding('utf8');  
        res.on('data', function (chunk) {  
            console.log('BODYBBBBB: ' + chunk);
            var result=JSON.parse(chunk); 
            respondata={
                    "code":"200",
                    "message":"update success",
            };
            respon.send(respondata);
        });  
    });  
    req.write(reqdate);
    req.on('error', function (e) {  
        console.log(e);
        console.log('problem request: ' + e.message);  
    });  
      
    req.end();
}