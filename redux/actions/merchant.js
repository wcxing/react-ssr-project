import tokenAdd from './tokenAdd'

export const GET_MERCHANT_INFO_REQUEST = 'merchant/GET_MERCHANT_INFO_REQUEST'
export const GET_MERCHANT_INFO_SUCCESS = 'merchant/GET_MERCHANT_INFO_SUCCESS'
export const GET_MERCHANT_INFO_FAIL = 'merchant/GET_USER_INFO_FAIL'

export const GET_MERCHANT_ACCOUNTS_REQUEST = 'merchant/GET_MERCHANT_ACCOUNTS_REQUEST'
export const GET_MERCHANT_ACCOUNTS_SUCCESS = 'merchant/GET_MERCHANT_ACCOUNTS_SUCCESS'
export const GET_MERCHANT_ACCOUNTS_FAIL = 'merchant/GET_MERCHANT_ACCOUNTS_FAIL'

export const GET_MERCHANT_LIST_REQUEST = 'merchant/GET_MERCHANT_LIST_REQUEST'
export const GET_MERCHANT_LIST_SUCCESS = 'merchant/GET_MERCHANT_LIST_SUCCESS'
export const GET_MERCHANT_LIST_FAIL = 'merchant/GET_MERCHANT_LIST_FAIL'

export const GET_MERCHANT_RECHARGE_SELECT_REQUEST = 'merchant/GET_MERCHANT_RECHARGE_SELECT_REQUEST'
export const GET_MERCHANT_RECHARGE_SELECT_SUCCESS = 'merchant/GET_MERCHANT_RECHARGE_SELECT_SUCCESS'
export const GET_MERCHANT_RECHARGE_SELECT_FAIL = 'merchant/GET_MERCHANT_RECHARGE_SELECT_FAIL'

export const GET_MERCHANT_RECHARGE_BALANCE_REQUEST = 'merchant/GET_MERCHANT_RECHARGE_BALANCE_REQUEST'
export const GET_MERCHANT_RECHARGE_BALANCE_SUCCESS = 'merchant/GET_MERCHANT_RECHARGE_BALANCE_SUCCESS'
export const GET_MERCHANT_RECHARGE_BALANCE_FAIL = 'merchant/GET_MERCHANT_RECHARGE_BALANCE_FAIL'

export const GET_MERCHANT_WITHDRAW_ACCOUNT_REQUEST = 'merchant/GET_MERCHANT_WITHDRAW_ACCOUNT_REQUEST'
export const GET_MERCHANT_WITHDRAW_ACCOUNT_SUCCESS = 'merchant/GET_MERCHANT_WITHDRAW_ACCOUNT_SUCCESS'
export const GET_MERCHANT_WITHDRAW_ACCOUNT_FAIL = 'merchant/GET_MERCHANT_WITHDRAW_ACCOUNT_FAIL'

export const GET_MERCHANT_WITHDRAW_CARD_REQUEST = 'merchant/GET_MERCHANT_WITHDRAW_CARD_REQUEST'
export const GET_MERCHANT_WITHDRAW_CARD_SUCCESS = 'merchant/GET_MERCHANT_WITHDRAW_CARD_SUCCESS'
export const GET_MERCHANT_WITHDRAW_CARD_FAIL = 'merchant/GET_MERCHANT_WITHDRAW_CARD_FAIL'

//获取用户信息
export function getMerchantInfo(item) {
  return {
    types: [GET_MERCHANT_INFO_REQUEST, GET_MERCHANT_INFO_SUCCESS, GET_MERCHANT_INFO_FAIL],
    promise: client => client.post('/merchantplatform/getMerchantInfo', tokenAdd(item))
  }
}

//获取备付金
export function getPaymentInfo(item) {
  return {
    types: [GET_MERCHANT_ACCOUNTS_REQUEST, GET_MERCHANT_ACCOUNTS_SUCCESS, GET_MERCHANT_ACCOUNTS_FAIL],
    promise: client => client.post('/merchantplatform/getAccountInfo', tokenAdd(item, true))
  }
}
//获取列表
export function getMerchantList(item) {
  return {
    types: [GET_MERCHANT_LIST_REQUEST, GET_MERCHANT_LIST_SUCCESS, GET_MERCHANT_LIST_FAIL],
    promise: client => client.get('/merchantplatform/getPaymentList', item)
  }
}
//获取充值帐户
export function getRechargeAccount(item) {
  return {
    types: [GET_MERCHANT_RECHARGE_SELECT_REQUEST, GET_MERCHANT_RECHARGE_SELECT_SUCCESS, GET_MERCHANT_RECHARGE_SELECT_FAIL],
    promise: client => client.get('/merchantplatform/getRechargeAccount', item)
  }
}
//获取账户余额
export function getRechargebalance(item) {
  return {
    types: [GET_MERCHANT_RECHARGE_BALANCE_REQUEST, GET_MERCHANT_RECHARGE_BALANCE_SUCCESS, GET_MERCHANT_RECHARGE_BALANCE_FAIL],
    promise: client => client.get('/merchantplatform/getPaymentBalance', item)
  }
}
//获取到账账户
export function getWithdrawAccount(item) {
  return {
    types: [GET_MERCHANT_WITHDRAW_ACCOUNT_REQUEST, GET_MERCHANT_WITHDRAW_ACCOUNT_SUCCESS, GET_MERCHANT_WITHDRAW_ACCOUNT_FAIL],
    promise: client => client.get('/merchantplatform/getWithdrawAccount', item)
  }
}
//获取到账卡号
export function getWithdrawCard(item) {
  return {
    types: [GET_MERCHANT_WITHDRAW_CARD_REQUEST, GET_MERCHANT_WITHDRAW_CARD_SUCCESS, GET_MERCHANT_WITHDRAW_CARD_FAIL],
    promise: client => client.get('/merchantplatform/getWithdrawCard', item)
  }
}


