import tokenAdd from './tokenAdd'

export const ACCOUNTS_SEARCH_REQUEST = 'accounts/ACCOUNTS_SEARCH_REQUEST'
export const ACCOUNTS_SEARCH_SUCCESS = 'accounts/ACCOUNTS_SEARCH_SUCCESS'
export const ACCOUNTS_SEARCH_FAIL = 'accounts/ACCOUNTS_SEARCH_FAIL'
export const ACCOUNTS_SEARCH_PARAM = 'accounts/ACCOUNTS_SEARCH_PARAM'


export const ACCOUNTS_ADD_INFO = 'accounts/ACCOUNTS_ADD_INFO'
export const ACCOUNTS_ADD_REQUEST = 'accounts/ACCOUNTS_ADD_REQUEST'
export const ACCOUNTS_ADD_SUCCESS = 'accounts/ACCOUNTS_ADD_SUCCESS'
export const ACCOUNTS_ADD_FAIL = 'accounts/ACCOUNTS_ADD_FAIL'

export const ACCOUNTS_REMOVE_REQUEST = 'accounts/ACCOUNTS_REMOVE_REQUEST'
export const ACCOUNTS_REMOVE_SUCCESS = 'accounts/ACCOUNTS_REMOVE_SUCCESS'
export const ACCOUNTS_REMOVE_FAIL = 'accounts/ACCOUNTS_REMOVE_FAIL'
export const ACCOUNTS_TYPE_INIT = 'accounts/ACCOUNTS_TYPE_INIT'

export const ACCOUNTS_DISABLE_REQUEST = 'accounts/ACCOUNTS_DISABLE_REQUEST'
export const ACCOUNTS_DISABLE_SUCCESS = 'accounts/ACCOUNTS_DISABLE_SUCCESS'
export const ACCOUNTS_DISABLE_FAIL = 'accounts/ACCOUNTS_DISABLE_FAIL'

export const ACCOUNTS_GET_USER_REQUEST = 'accounts/ACCOUNTS_GET_USER_REQUEST'
export const ACCOUNTS_GET_USER_SUCCESS = 'accounts/ACCOUNTS_GET_USER_SUCCESS'
export const ACCOUNTS_GET_USER_FAIL = 'accounts/ACCOUNTS_GET_USER_FAIL'

export const ACCOUNTS_GET_SELECT_TYPE_REQUEST = 'accounts/ACCOUNTS_GET_SELECT_TYPE_REQUEST'
export const ACCOUNTS_GET_SELECT_TYPE_SUCCESS = 'accounts/ACCOUNTS_GET_SELECT_TYPE_SUCCESS'
export const ACCOUNTS_GET_SELECT_TYPE_FAIL = 'accounts/ACCOUNTS_GET_SELECT_TYPE_FAIL'

export const ACCOUNTS_GET_SELECT_LIST_REQUEST = 'accounts/ACCOUNTS_GET_SELECT_LIST_REQUEST'
export const ACCOUNTS_GET_SELECT_LIST_SUCCESS = 'accounts/ACCOUNTS_GET_SELECT_LIST_SUCCESS'
export const ACCOUNTS_GET_SELECT_LIST_FAIL = 'accounts/ACCOUNTS_GET_SELECT_LIST_FAIL'

export const ACCOUNTS_GET_BINDUSERS_REQUEST = 'accounts/ACCOUNTS_GET_BINDUSERS_REQUEST'
export const ACCOUNTS_GET_BINDUSERS_SUCCESS = 'accounts/ACCOUNTS_GET_BINDUSERS_SUCCESS'
export const ACCOUNTS_GET_BINDUSERS_FAIL = 'accounts/ACCOUNTS_GET_BINDUSERS_FAIL'

export const ACCOUNTS_SEARCH_NOT = 'accounts/ACCOUNTS_SEARCH_NOT'

//获取绑定角色列表
export function accountGetbindUsers(item) {
  return {
    types: [ACCOUNTS_GET_BINDUSERS_REQUEST, ACCOUNTS_GET_BINDUSERS_SUCCESS, ACCOUNTS_GET_BINDUSERS_FAIL],
    promise: client => client.post('/merchantplatform/rolesInfo/list', tokenAdd(item))
  }
}
//创建角色
export function accountAdd(params) {
  return {
    types: [ACCOUNTS_ADD_REQUEST, ACCOUNTS_ADD_SUCCESS, ACCOUNTS_ADD_FAIL],
    promise: params.accountCode==1 ? client => client.post('/merchantplatform/accountInfo', tokenAdd(params)) : client => client.put('/merchantplatform/accountInfo', tokenAdd(params))
  }
}
//创建角色初始化
export function accountAddInfo() {
  return {
    type: ACCOUNTS_ADD_FAIL
  }
}

//获取列表
export function accountSearch(item) {
  return {
    types: [ACCOUNTS_SEARCH_REQUEST, ACCOUNTS_SEARCH_SUCCESS, ACCOUNTS_SEARCH_FAIL],
    promise: client => client.post('/merchantplatform/accountInfo/list', tokenAdd(item, true))
  }
}
//获取详情
export function accountGetUser(accountCode) {
  return {
    types: [ACCOUNTS_GET_USER_REQUEST, ACCOUNTS_GET_USER_SUCCESS, ACCOUNTS_GET_USER_FAIL],
    promise: client => client.get('/merchantplatform/accountInfo/'+accountCode, {params: tokenAdd()})
  }
}
//获取详情初始化
export function accountGetUserInfo() {
  return {
    type: ACCOUNTS_GET_USER_REQUEST
  }
}

//存储搜索条件
export function accountSearchParam(item) {
  return {
    type: ACCOUNTS_SEARCH_PARAM,
    value:item
  }
}
//初始化停用、删除
export function accountInit() {
  return {
    type: ACCOUNTS_TYPE_INIT
  }
}
//删除&&停用
export function accountRemove(item) {
  return {
    types: [ACCOUNTS_REMOVE_REQUEST, ACCOUNTS_REMOVE_SUCCESS, ACCOUNTS_REMOVE_FAIL],
    promise: client => client.post('/merchantplatform/accountInfo/'+item.accountCode, tokenAdd({statusId:item.state})),
    value:item.state
  }
}
//停用
export function accountDisable(accountCode) {
  return {
    types: [ACCOUNTS_DISABLE_REQUEST, ACCOUNTS_DISABLE_SUCCESS, ACCOUNTS_DISABLE_FAIL],
    promise: client => client.post('/merchantplatform/accountInfo/'+accountCode, tokenAdd({statusId:'-1'}))
  }
}










