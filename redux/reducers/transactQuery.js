import { GET_TRANSACT_INFO_REQUEST, GET_TRANSACT_INFO_SUCCESS, GET_TRANSACT_INFO_FAIL, UPDATE_TRANSACTMERCHANT_SEARCH_INFO, GET_TRANSACTMERCHANT_AUDIT_INFO_REQUEST, GET_TRANSACTMERCHANT_AUDIT_INFO_SUCCESS, GET_TRANSACTMERCHANT_AUDIT_INFO_FAIL, GET_TRANS_DETAILS_REQUEST, GET_TRANS_DETAILS_SUCCESS, GET_TRANS_DETAILS_FAIL } from '../actions/TransactQuery'
const initState = {
  isLoading: false,
  transactList: {},
  errorMsg: '',
  searchInfo: {}
}

export function transactList(state = initState, action) {
  switch (action.type) {
    case GET_TRANSACT_INFO_REQUEST:
      return {
        ...state,
        isLoading: true,
        transactList: {},
        errorMsg: ''
      }
    case GET_TRANSACT_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        transactList: action.result.data,
        errorMsg: ''
      }
    case GET_TRANSACT_INFO_FAIL:
      return {
        ...state,
        isLoading: false,
        transactList: {},
        errorMsg: '请求错误'
      }
    default:
      return state
  }
}

export function searchInfosss(state = initState, action) {
  switch (action.type) {
    case UPDATE_TRANSACTMERCHANT_SEARCH_INFO:
      return {
        ...state,
        searchInfo: action.value,
        errorMsg: ''
      }
    default:
      return state
  }
}










export function transactMerchantAuditList(state = initState, action) {
  switch (action.type) {
    case GET_TRANSACTMERCHANT_AUDIT_INFO_REQUEST:
      return {
        ...state,
        isLoading: true,
        merchantAuditInfo: {},
        errorMsg: ''
      }
    case GET_TRANSACTMERCHANT_AUDIT_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        merchantAuditInfo: action.result.data,
        errorMsg: ''
      }
    case GET_TRANSACTMERCHANT_AUDIT_INFO_FAIL:
      return {
        ...state,
        isLoading: false,
        merchantAuditInfo: {},
        errorMsg: '请求错误'
      }
    default:
      return state
  }
}
export function transactDetails(state = initState, action) {
  switch (action.type) {
    case GET_TRANS_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
        transactDetails: {},
        errorMsg: ''
      }
    case GET_TRANS_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        transactDetails: action.result.data,
        errorMsg: ''
      }
    case GET_TRANS_DETAILS_FAIL:
      return {
        ...state,
        isLoading: false,
        transactDetails: {},
        errorMsg: '请求错误'
      }
    default:
      return state
  }
}
