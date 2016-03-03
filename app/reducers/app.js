import {
  GET_TOASTER,
  GET_SYSTEMINFO
} from '../constants/ActionTypes.js'

export function toaster(state="", action) {
  switch (action.type) {
    case GET_TOASTER:
      return action.toaster
    default:
      return state
  }
}

export function systemInfo(state={}, action) {
  switch (action.type) {
    case GET_SYSTEMINFO:
      return state
    default:
      return state
  }
}