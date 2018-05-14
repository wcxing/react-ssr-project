import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  FORGET_PENDING,
  FORGET_SUCCESS,
  FORGET_ERROR,
  FORGET_PASS_PENDING,
  FORGET_PASS_SUCCESS,
  FORGET_PASS_ERROR,
  FORGET_PHONE_PENDING,
  FORGET_PHONE_SUCCESS,
  FORGET_PHONE_ERROR
} from '../actions/auth'

const initialState = {
  user: null,
  loggingIn: false,
  loggingOut: false,
  loginErrors: null,
  phone: null,
  forgetInfo: null,
  forgetpassInfo: null
}

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case FORGET_PHONE_PENDING:
      return {
        ...state,
        phone: null
      }
    case FORGET_PHONE_SUCCESS:
      return {
        ...state,
        phone: action.result.data
      }
    case FORGET_PHONE_ERROR:
      return {
        ...state,
        phone: null
      }
    case FORGET_PENDING:
      return {
        ...state,
        forgetInfo: null
      }
    case FORGET_SUCCESS:
      return {
        ...state,
        forgetInfo: action.result.data
      }
    case FORGET_ERROR:
      return {
        ...state,
        forgetInfo: null
      }
    case FORGET_PASS_PENDING:
      return {
        ...state,
        forgetpassInfo: null
      }
    case FORGET_PASS_SUCCESS:
      return {
        ...state,
        forgetpassInfo: action.result.data
      }
    case FORGET_PASS_ERROR:
      return {
        ...state,
        forgetpassInfo: null
      }
    case LOGIN_PENDING:
      return Object.assign({}, initialState, { loggingIn: true })
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        user: action.result.data,
        loginErrors: null
      }
    case LOGIN_ERROR:
      return {
        ...state,
        loggingIn: false,
        user: null,
        loginErrors: action.error.response.data.message
      }
    case LOGOUT_SUCCESS:
      let loggingOut=false
      if(action.result.data.isSuccess){
        sessionStorage.clear()
        loggingOut=true
      }
      return {
        ...state,
        loggingOut,
        user: null,
        loginErrors: null
      }
    default:
      return state
  }
}
