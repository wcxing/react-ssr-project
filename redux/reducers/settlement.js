import * as SETTLEMENT from '../actions/settlement'

/*
* 初始化state
* accountSearchParam:搜索条件
* reconciliations:对账文件的类型,
* reconciliation:对账类型,
* reconciliationList:列表
* reconciliationDownload:下载
 */
const initState = {
  isLoading: false,
  settlementSearchParam:{},
  reconciliations:{},
  reconciliation:{},
  reconciliationList:{},
  reconciliationDownload:{},
  errorMsg: ''
}


export default function reducers(state = initState, action) {
  switch (action.type) {
    case SETTLEMENT.SETTLEMENT_SEARCH_PARAM:
      return {
        ...state,
        settlementSearchParam:action.value
      }
    case SETTLEMENT.GET_SETTLEMENT_REQUEST:
      return {
        ...state,
        isLoading: false,
        reconciliationList:{},
        errorMsg: ''
      }
    case SETTLEMENT.GET_SETTLEMENT_SUCCESS:
      return {
        ...state,
        isLoading: true,
        reconciliationList:action.result.data
      }
    case SETTLEMENT.GET_SETTLEMENT_FAIL:
      return {
        ...state,
        isLoading: false,
        reconciliationList:{},
        errorMsg: '请求错误'
      }
    case SETTLEMENT.GET_SETTLEMENT_SELECT_REQUEST:
      return {
        ...state,
        isLoading: false,
        reconciliations:{},
        errorMsg: ''
      }
    case SETTLEMENT.GET_SETTLEMENT_SELECT_SUCCESS:
      return {
        ...state,
        isLoading: true,
        reconciliations:action.result.data
      }
    case SETTLEMENT.GET_SETTLEMENT_SELECT_FAIL:
      return {
        ...state,
        isLoading: false,
        reconciliations:{},
        errorMsg: '请求错误'
      }
    case SETTLEMENT.GET_SETTLEMENT_SELECTT_REQUEST:
      return {
        ...state,
        isLoading: false,
        reconciliation:{},
        errorMsg: ''
      }
    case SETTLEMENT.GET_SETTLEMENT_SELECTT_SUCCESS:
      return {
        ...state,
        isLoading: true,
        reconciliation:action.result.data
      }
    case SETTLEMENT.GET_SETTLEMENT_SELECTT_FAIL:
      return {
        ...state,
        isLoading: false,
        reconciliation:{},
        errorMsg: '请求错误'
      }
    case SETTLEMENT.GET_SETTLEMENT_DOWNLOAD_REQUEST:
      return {
        ...state,
        isLoading: false,
        reconciliationDownload:{},
        errorMsg: ''
      }
    case SETTLEMENT.GET_SETTLEMENT_DOWNLOAD_FAIL:
      return {
        ...state,
        isLoading: true,
        reconciliationDownload:action.result.data
      }
    // case SETTLEMENT.GET_NOTICE_DETAIL_FAIL:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     reconciliationDownload:{},
    //     errorMsg: '请求错误'
    //   }
    default:
      return state
  }
}

