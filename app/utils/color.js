/**
 * ====================================
 * 十六进制颜色值域RGB格式颜色值之间的相互转换
 */

//十六进制颜色值的正则表达式
var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/

/*RGB颜色转换为16进制*/
String.prototype.colorHex = function(){
  var that = this
  if(/^(rgb|RGB)/.test(that)){
    var aColor = that.replace(/(?:||rgb|RGB)*/g,"").split(",")
    var strHex = "#"
    for(var i=0; i<aColor.length; i++){
      var hex = Number(aColor[i]).toString(16)
      if(hex === "0"){
        hex += hex
      }
      strHex += hex
    }
    if(strHex.length !== 7){
      strHex = that
    }
    return strHex
  }else if(reg.test(that)){
    var aNum = that.replace(/#/,"").split("")
    if(aNum.length === 6){
      return that
    }else if(aNum.length === 3){
      var numHex = "#"
      for(var i=0; i<aNum.length; i+=1){
        numHex += (aNum[i]+aNum[i])
      }
      return numHex
    }  
  }else{
      return that
  }
}

/*16进制颜色转为RGB格式*/
String.prototype.colorRgb = function(){
  var sColor = this.toLowerCase()
  if(sColor && reg.test(sColor)){
    if(sColor.length === 4){
      var sColorNew = "#"
      for(var i=1; i<4; i+=1){
        sColorNew += sColor.slice(i,i+1).concat(sColor.slice(i,i+1))
      }  
      sColor = sColorNew
    }  
    //处理六位的颜色值
    var sColorChange = [];  
    for(var i=1; i<7; i+=2){  
      sColorChange.push(parseInt("0x"+sColor.slice(i,i+2))) 
    }
    return "RGB(" + sColorChange.join(",") + ")"
  }else{
    return sColor
  }
}

// var sRgb = "RGB(255, 255, 255)" , sHex = "#00538b"
// var sHexColor = sRgb.colorHex();//转换为十六进制方法<code></code>
// var sRgbColor = sHex.colorRgb();//转为RGB颜色值的方法

/**
 * ====================================
 * 取反颜色
 */

export function getUnColor(rgb) {
  if (/^(rgb|RGB)/.test(rgb)) {
    var aColor = rgb.replace(/(?:||rgb|RGB|\(|\))*/g,"").split(",")
    var unCloor = []
    for(var i=0; i<aColor.length; i++){
      var unNum = 255 - parseInt(aColor[i])
      unCloor.push(unNum)
    }
    return `RGB(${unCloor.toString()})`
  }
}