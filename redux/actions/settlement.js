import tokenAdd from './tokenAdd'

export const SETTLEMENT_SEARCH_PARAM ='settlement/SETTLEMENT_SEARCH_PARAM'

export const GET_SETTLEMENT_REQUEST = 'settlement/GET_SETTLEMENT_REQUEST'
export const GET_SETTLEMENT_SUCCESS = 'settlement/GET_SETTLEMENT_SUCCESS'
export const GET_SETTLEMENT_FAIL = 'settlement/GET_SETTLEMENT_FAIL'

export const GET_SETTLEMENT_SELECT_REQUEST = 'settlement/GET_SETTLEMENT_SELECT_REQUEST'
export const GET_SETTLEMENT_SELECT_SUCCESS = 'settlement/GET_SETTLEMENT_SELECT_SUCCESS'
export const GET_SETTLEMENT_SELECT_FAIL = 'settlement/GET_SETTLEMENT_SELECT_FAIL'

export const GET_SETTLEMENT_SELECTT_REQUEST = 'settlement/GET_SETTLEMENT_SELECTT_REQUEST'
export const GET_SETTLEMENT_SELECTT_SUCCESS = 'settlement/GET_SETTLEMENT_SELECTT_SUCCESS'
export const GET_SETTLEMENT_SELECTT_FAIL = 'settlement/GET_SETTLEMENT_SELECTT_FAIL'

export const GET_SETTLEMENT_DOWNLOAD_REQUEST = 'settlement/GET_SETTLEMENT_DOWNLOAD_REQUEST'
export const GET_SETTLEMENT_DOWNLOAD_SUCCESS = 'settlement/GET_SETTLEMENT_DOWNLOAD_SUCCESS'
export const GET_SETTLEMENT_DOWNLOAD_FAIL = 'settlement/GET_SETTLEMENT_DOWNLOAD_FAIL'



//存储搜索条件
export function settlementSearchParam(item) {
  return {
    type: SETTLEMENT_SEARCH_PARAM,
    value:item
  }
}
//获取对账文件的类型
export function getReconciliations(item) {
  return {
    types: [GET_SETTLEMENT_SELECT_REQUEST, GET_SETTLEMENT_SELECT_SUCCESS, GET_SETTLEMENT_SELECT_FAIL],
    promise: client => client.get('/operation-platform/getReconciliations', tokenAdd(item))
  }
}
//获取对账类型
export function getReconciliation(item) {
  return {
    types: [GET_SETTLEMENT_SELECTT_REQUEST, GET_SETTLEMENT_SELECTT_SUCCESS, GET_SETTLEMENT_SELECTT_FAIL],
    promise: client => client.get('/operation-platform/getReconciliation', tokenAdd(item))
  }
}
//获取下载列表
export function getReconciliationList(item) {
  return {
    types: [GET_SETTLEMENT_REQUEST, GET_SETTLEMENT_SUCCESS, GET_SETTLEMENT_FAIL],
    promise: client => client.get('/operation-platform/getReconciliationList', tokenAdd(item))
  }
}
//下载
export function reconciliationDownload(item) {
  return {
    types: [GET_SETTLEMENT_DOWNLOAD_REQUEST, GET_SETTLEMENT_DOWNLOAD_SUCCESS, GET_SETTLEMENT_DOWNLOAD_FAIL],
    promise: client => client.get('/operation-platform/reconciliationDownload', tokenAdd(item))
  }
}

