import {
  REQUEST_POST, REQUEST_DONE,
  REQUEST_FAIL, REQUEST_RECEIVE
} from '../constants/ActionTypes.js'

export function prueData(state={}, action) {

  switch (action.type) {
    case REQUEST_DONE:
      state[action.api] = action.json
      const data = {
        ...state
      }
      console.log(data)
    default:
      return state
  }
}