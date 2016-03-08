import 'isomorphic-fetch'
export const SERVER_API = 'http://www.caixie.net/static/'

// spellApi = (api) => (
//   SERVER_API + `_${api}.json`
// )
const spellApi = (api) => {
  return SERVER_API + `_${api}.json`
}

export const $q = (api,args) => {
  // return fetch(spellApi(api),{
  //   method: 'post',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify({
  //     name: 'Hubot',
  //     login: 'hubot',
  //   })
  // })
  let _api = spellApi(api)
  return fetch(spellApi(api))
    .then(response => response.json())
    // .then(json => console.log(json))
    // .catch(error => console.log(error))
}