/* eslint-disable */
import tokenAdd from './tokenAdd'
export const UPDATE_USER_PASS_REQUEST = 'user/pass/UPDATE_USER_PASS_REQUEST'
export const UPDATE_USER_PASS_SUCCESS = 'user/pass/UPDATE_USER_PASS_SUCCESS'
export const UPDATE_USER_PASS_FAIL = 'user/pass/UPDATE_USER_PASS_FAIL'
//修改密码
export function updatePassword(item) {
  return {
    types: [UPDATE_USER_PASS_REQUEST, UPDATE_USER_PASS_SUCCESS, UPDATE_USER_PASS_FAIL],
    promise: client => client.post('/merchantplatform/revampPwd', tokenAdd(item))
  }
}
export function updateInfo() {
  return {
    type: UPDATE_USER_PASS_REQUEST
  }
}


