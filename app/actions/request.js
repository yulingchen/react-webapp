/**
 * request 无操作的数据流
 * 
 */

import * as types from '../constants/ActionTypes.js'

function sendRequest(api,args) {
  return {
    type: types.REQUEST_POST,
    api,
    args
  }
}
function receiveRequest(api,json) {
  return {
    type: types.REQUEST_DONE,
    api,
    json
  }
}
export function request(api,args) {
  return dispatch => {
    dispatch(sendRequest(api,args))

    return fetch(`http://caixie.net/react/static/_${api}.json`)
      .then(response => response.json())
      .then(json => {
        dispatch(receiveRequest(api,json))
      })
      .catch(error => console.log(error))
  }
}