import * as ACTIONS from '../actions/merchant'

/*
* 初始化state
* accountInfo:用户信息,
 */
const initState = {
  isLoading: false,
  accountInfo:{},
  errorMsg: ''
}
export function merchantInfo(state = initState, action) {
  switch (action.type) {
    case ACTIONS.GET_MERCHANT_INFO_REQUEST:
      return {
        ...state,
        isLoading: false,
        accountInfo: {},
        errorMsg: ''
      }
    case ACTIONS.GET_MERCHANT_INFO_SUCCESS:
      return {
        ...state,
        isLoading: true,
        accountInfo: action.result.data
      }
    case ACTIONS.GET_MERCHANT_INFO_FAIL:
      return {
        isLoading: false,
        accountInfo:{},
        errorMsg: '请求错误'
      }
    default:
      return state
  }
}

/*
* 初始化state
* Payment:备付金信息,
* accountList:明细列表
* balance:账户余额
* rechargeAccount:充值账户下拉列表
  withdrawAccount:到账账户,
  withdrawCard:到账卡号,
 */
const initAccountStates = {
  isLoading: false,
  payment:{},
  accountList:{},
  balance:0,
  rechargeAccount:[],
  withdrawAccount:[],
  withdrawCard:[],
  errorMsg: ''
}
export function merchantAccount(state = initAccountStates, action) {
  switch (action.type) {
    case ACTIONS.GET_MERCHANT_ACCOUNTS_REQUEST:
      return {
        ...state,
        isLoading: false,
        payment: {},
        errorMsg: ''
      }
    case ACTIONS.GET_MERCHANT_ACCOUNTS_SUCCESS:
      return {
        ...state,
        isLoading: true,
        payment: action.result.data
      }
    case ACTIONS.GET_MERCHANT_ACCOUNTS_FAIL:
      return {
        isLoading: false,
        payment:{},
        errorMsg: '请求错误'
      }
    case ACTIONS.GET_MERCHANT_LIST_REQUEST:
      return {
        ...state,
        isLoading: false,
        accountList: [],
        errorMsg: ''
      }
    case ACTIONS.GET_MERCHANT_LIST_SUCCESS:
      return {
        ...state,
        isLoading: true,
        accountList: action.result.data
      }
    case ACTIONS.GET_MERCHANT_LIST_FAIL:
      return {
        isLoading: false,
        accountList:{},
        errorMsg: '请求错误'
      }
    case ACTIONS.GET_MERCHANT_RECHARGE_SELECT_REQUEST:
      return {
        ...state,
        isLoading: false,
        rechargeAccount: [],
        errorMsg: ''
      }
    case ACTIONS.GET_MERCHANT_RECHARGE_SELECT_SUCCESS:
      return {
        ...state,
        isLoading: true,
        rechargeAccount: action.result.data
      }
    case ACTIONS.GET_MERCHANT_RECHARGE_SELECT_FAIL:
      return {
        isLoading: false,
        rechargeAccount:{},
        errorMsg: '请求错误'
      }
    case ACTIONS.GET_MERCHANT_RECHARGE_BALANCE_REQUEST:
      return {
        ...state,
        isLoading: false,
        balance:0,
        errorMsg: ''
      }
    case ACTIONS.GET_MERCHANT_RECHARGE_BALANCE_SUCCESS:
      return {
        ...state,
        isLoading: true,
        balance: action.result.data.data.amount
      }
    case ACTIONS.GET_MERCHANT_RECHARGE_BALANCE_FAIL:
      return {
        isLoading: false,
        balance:0,
        errorMsg: '请求错误'
      }
    default:
      return state
  }
}
