export const GET_TRANSACT_INFO_REQUEST = 'merchantManage/GET_TRANSACT_INFO_REQUEST'
export const GET_TRANSACT_INFO_SUCCESS = 'merchantManage/GET_TRANSACT_INFO_SUCCESS'
export const GET_TRANSACT_INFO_FAIL = 'merchantManage/GET_TRANSACT_INFO_FAIL'

export const UPDATE_TRANSACTMERCHANT_SEARCH_INFO = 'transaction/UPDATE_TRANSACTMERCHANT_SEARCH_INFO'

export const GET_TRANSACTMERCHANT_AUDIT_INFO_REQUEST = 'merchantManage/GET_TRANSACTMERCHANT_AUDIT_INFO_REQUEST'
export const GET_TRANSACTMERCHANT_AUDIT_INFO_SUCCESS = 'merchantManage/GET_TRANSACTMERCHANT_AUDIT_INFO_SUCCESS'
export const GET_TRANSACTMERCHANT_AUDIT_INFO_FAIL = 'merchantManage/GET_TRANSACTMERCHANT_AUDIT_INFO_FAIL'

export const GET_TRANS_DETAILS_REQUEST = 'TRANSManage/GET_TRANS_DETAILS_REQUEST'
export const GET_TRANS_DETAILS_SUCCESS = 'TRANSManage/GET_TRANS_DETAILS_SUCCESS'
export const GET_TRANS_DETAILS_FAIL = 'TRANSManage/GET_TRANS_DETAILS_FAIL'
import tokenAdd from './tokenAdd'


/**
 * 搜索条件
 * 
 * @export
 * @param {any} item 
 * @returns 
 */
export function updateSearchInfo(item) {
  return {
    type: UPDATE_TRANSACTMERCHANT_SEARCH_INFO,
    value: item
  }
}
export function transactlistInit(item) {
  return {
    type: GET_TRANSACT_INFO_FAIL
  }
}

/**
 * 交易列表数据
 * 
 * @export
 * @param {any} item 
 * @returns 
 */
export function getTransactList(item) {
  return {
    types: [GET_TRANSACT_INFO_REQUEST, GET_TRANSACT_INFO_SUCCESS, GET_TRANSACT_INFO_FAIL],
    promise: client => client.post('/merchantplatform/tradeQuery', tokenAdd(item))
  }
}
/**
 * 交易详情
 * 
 * @export
 * @param {any} item 
 * @returns 
 */
export function getTransactInfo(item) {
  return {
    types: [GET_MERCHANT_INFO_REQUEST, GET_MERCHANT_INFO_SUCCESS, GET_MERCHANT_INFO_FAIL],
    promise: client => client.get('/merchantplatform/merchantInfo', tokenAdd(item))
  }
}

export function getTransactMerchantAuditList(item) {
  return {
    types: [GET_TRANSACTMERCHANT_AUDIT_INFO_REQUEST, GET_TRANSACTMERCHANT_AUDIT_INFO_SUCCESS, GET_TRANSACTMERCHANT_AUDIT_INFO_FAIL],
    promise: client => client.get('/merchantplatform/merchantInfo/audit', {data:item})
  }
}

export function getTransactDetails(item) {
  return {
    types: [GET_TRANS_DETAILS_REQUEST, GET_TRANS_DETAILS_SUCCESS, GET_TRANS_DETAILS_FAIL],
    promise: client => client.post('/merchantplatform/tradeQueryDetail', tokenAdd(item))
  }
}