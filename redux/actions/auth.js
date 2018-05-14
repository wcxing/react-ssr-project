import tokenAdd from './tokenAdd'

export const LOGIN_PENDING = 'LOGIN_PENDING'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const LOGOUT_PENDING = 'LOGOUT_PENDING'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_ERROR = 'LOGOUT_ERROR'

export const FORGET_PHONE_PENDING = 'FORGET_PHONE_PENDING'
export const FORGET_PHONE_SUCCESS = 'FORGET_PHONE_SUCCESS'
export const FORGET_PHONE_ERROR = 'FORGET_PHONE_ERROR'

export const FORGET_PENDING = 'FORGET_PENDING'
export const FORGET_SUCCESS = 'FORGET_SUCCESS'
export const FORGET_ERROR = 'FORGET_ERROR'

export const FORGET_PASS_PENDING = 'FORGET_PASS_PENDING'
export const FORGET_PASS_SUCCESS = 'FORGET_PASS_SUCCESS'
export const FORGET_PASS_ERROR = 'FORGET_PASS_ERROR'



//登录
export function login(item) {
  return {
    types: [LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR],
    promise: client => client.post('/merchantplatform/login', item )
  }
}

//退出
export function logout() {
  return {
    types:[LOGOUT_PENDING, LOGOUT_SUCCESS, LOGOUT_ERROR],
    promise: client => client.post('/merchantplatform/logout', tokenAdd())
    //promise: api.get('/logout')
  }
}

//发送短信
export function forgetPhone(param) {
  return {
    types: [FORGET_PHONE_PENDING, FORGET_PHONE_SUCCESS, FORGET_PHONE_ERROR],
    promise: client => client.post('/merchantplatform/phoneValidateCode', param)
  }
}

//找回密码
export function forget(param) {
  return {
    types: [FORGET_PENDING, FORGET_SUCCESS, FORGET_ERROR],
    promise: client => client.post('/merchantplatform/checkPhoneValidateCode', param)
  }
}
//找回密码修改
export function forgetPass(item) {
  return {
    types: [FORGET_PASS_PENDING, FORGET_PASS_SUCCESS, FORGET_PASS_ERROR],
    promise: client => client.post('/merchantplatform/findPwd', item )
  }
}