
export function getJsonLength(jsonData) {
  var jsonLength = 0
  for(var item in jsonData) {
    jsonLength++
  }
  return jsonLength
}

export function getJsonToArray(jsonData) {
  var jsonToArray = []
  for (var item in jsonData) {
    jsonToArray.push(item)
  }
  return jsonToArray
}