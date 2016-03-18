import 'isomorphic-fetch'

export const $q = (api,args) => {
  return fetch(`http://www.caixie.net/api/${api}.json`)
    .then(response => response.json())
}