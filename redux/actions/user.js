/* eslint-disable */
import tokenAdd from './tokenAdd'

export const GET_USER_INFO_REQUEST = 'user/GET_USER_INFO_REQUEST'
export const GET_USER_INFO_SUCCESS = 'user/GET_USER_INFO_SUCCESS'
export const GET_USER_INFO_FAIL = 'user/GET_USER_INFO_FAIL'
// 获取用户列表
export const GET_USER_GET_LIST_REQUEST = 'user/GET_USER_GET_LIST_REQUEST'
export const GET_USER_GET_LIST_SUCCESS = 'user/GET_USER_GET_LIST_SUCCESS'
export const GET_USER_GET_LIST_FAIL = 'user/GET_USER_GET_LIST_FAIL'
// 个人开户
export const ADD_PERSENAL_USER_REQUEST = 'ADD_PERSENAL-USER_REQUEST'
export const ADD_PERSENAL_USER_SUCCESS = 'ADD_PERSENAL-USER_SUCCESS'
export const ADD_PERSENAL_USER_FAIL = 'ADD_PERSENAL-USER_FAIL'
// 获取绑卡列表
export const GET_BIND_CARD_LIST_REQUEST = 'GET_BIND_CARD_LIST_REQUEST'
export const GET_BIND_CARD_LIST_SUCCESS = 'GET_BIND_CARD_LIST_SUCCESS'
export const GET_BIND_CARD_LIST_FAIL = 'GET_BIND_CARD_LIST_FAIL'
// 销户 
export const CLOSE_ACCOUT_REQUEST = 'CLOSE_ACCOUT_REQUEST'
export const CLOSE_ACCOUT_SUCCESS = 'CLOSE_ACCOUT_SUCCESS'
export const CLOSE_ACCOUT_FAIL = 'CLOSE_ACCOUT_FAIL'
// 保存 参数
export const SAVEPARAMUSERID = 'SAVEPARAMUSERID'
//获取用户信息
export function getUserInfo() {
  const accountCode = JSON.parse(sessionStorage.getItem('accountInfo')).accountCode
  return {
    types: [GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, GET_USER_INFO_FAIL],
    promise: client => client.get('/accountInfo/'+accountCode, {params: tokenAdd()})
  }
}

//获取用户列表
export function getUserList(param) {
  return {
    types: [GET_USER_GET_LIST_REQUEST, GET_USER_GET_LIST_SUCCESS, GET_USER_GET_LIST_FAIL],
    // searchInfo:param,
    promise: client => client.post('/merchantplatform/queryFinanacePerson', tokenAdd(param))
  }
}

// 个人开户（新增用户 个人）
export function addPersenalUser(param) {
  return {
    types: [ADD_PERSENAL_USER_REQUEST, ADD_PERSENAL_USER_SUCCESS, ADD_PERSENAL_USER_FAIL],
    promise: client => client.post('/merchantplatform/openFinanacePerson', tokenAdd(param))
  }
}

// 获取绑卡信息
export function getBindCardList(param) {
  return {
    types: [GET_BIND_CARD_LIST_REQUEST, GET_BIND_CARD_LIST_SUCCESS, GET_BIND_CARD_LIST_FAIL ],
    promise: client => client.post('/merchantplatform/bankCardQuery', tokenAdd(param))
  }
}
// 销户
export function closeAccount(param){
  return {
    types: [CLOSE_ACCOUT_REQUEST, CLOSE_ACCOUT_SUCCESS, CLOSE_ACCOUT_FAIL],
    promise: client => client.post('/merchantplatform/cancelled', tokenAdd(param))
  }
}
// 保存 查询参数
export function saveParamUserId(param){
  return {
    type: SAVEPARAMUSERID,
    value: param
  }
}


