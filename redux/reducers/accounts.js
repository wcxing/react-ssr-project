import * as ACCOUNTS from '../actions/accounts'

/*
* 初始化state
* accountSearchParam:搜索条件,
* isListLoading:列表数据加载loading
* accountsList:搜索结果,
* removeResult:删除结果,
* disableResult:停用结果,
* accountsInfo:当前用户信息
* isloadList:默认是否搜索
 */
const initState = {
  isloadList:true,
  isLoading: false,
  isListLoading:true,
  accountSearchParam:{},
  accountsList:[],
  removeType:false,
  removeResult:{},
  disableType:false,
  disableResult:{},
  accountsInfo:{},
  addLoading:true,
  addAccount:{},
  removeAndUpdate:null,
  errorMsg: ''
}


export function accountsReducers(state = initState, action) {
  switch (action.type) {
    case ACCOUNTS.ACCOUNTS_SEARCH_PARAM:
      return {
        ...state,
        accountSearchParam:action.value
      }
    case ACCOUNTS.ACCOUNTS_SEARCH_REQUEST:
      return {
        ...state,
        isListLoading: false,
        accountsList:[],
        errorMsg: ''
      }
    case ACCOUNTS.ACCOUNTS_SEARCH_SUCCESS:
      return {
        ...state,
        isListLoading: true,
        accountsList: action.result.data
      }
    case ACCOUNTS.ACCOUNTS_SEARCH_FAIL:
      return {
        ...state,
        isListLoading: false,
        accountsList:[],
        errorMsg: '请求错误'
      }
    case ACCOUNTS.ACCOUNTS_ADD_REQUEST:
      return {
        ...state,
        addLoading: false,
        addAccount:{},
        errorMsg: ''
      }
    case ACCOUNTS.ACCOUNTS_ADD_SUCCESS:
      return {
        ...state,
        addLoading: true,
        isloadList: true,
        addAccount: action.result.data
      }
    case ACCOUNTS.ACCOUNTS_ADD_FAIL:
      return {
        ...state,
        addLoading: true,
        addAccount:{},
        errorMsg: ''
      }
    case ACCOUNTS.ACCOUNTS_TYPE_INIT:
      return {
        ...state,
        isLoading: false,
        disableType:false,
        disableResult:{},
        removeType:false,
        removeResult:{},
        removeAndUpdate:null
      }
    case ACCOUNTS.ACCOUNTS_REMOVE_REQUEST:
      return {
        ...state,
        isLoading: false,
        removeType:false,
        removeResult:{}
      }
    case ACCOUNTS.ACCOUNTS_REMOVE_SUCCESS:
      console.log(action.type)
      return {
        ...state,
        isLoading: true,
        removeType:true,
        removeAndUpdate:action.value,
        removeResult:action.result.data
      }
    case ACCOUNTS.ACCOUNTS_REMOVE_FAIL:
      return {
        ...state,
        isLoading: false,
        removeType:false,
        removeResult:{},
        errorMsg: '请求错误'
      }
    case ACCOUNTS.ACCOUNTS_DISABLE_REQUEST:
      return {
        ...state,
        isLoading: false,
        disableType:false,
        disableResult:{}
      }
    case ACCOUNTS.ACCOUNTS_DISABLE_SUCCESS:
      return {
        ...state,
        isLoading: true,
        disableType:true,
        disableResult:action.result.data
      }
    case ACCOUNTS.ACCOUNTS_DISABLE_FAIL:
      return {
        ...state,
        isLoading: false,
        disableType:false,
        disableResult:{},
        errorMsg: '请求错误'
      }

    case ACCOUNTS.ACCOUNTS_GET_USER_REQUEST:
      return {
        ...state,
        isLoading: false,
        accountsInfo:{}
      }
    case ACCOUNTS.ACCOUNTS_GET_USER_SUCCESS:
      return {
        ...state,
        isloadList: false,
        isLoading: true,
        accountsInfo:action.result.data
      }
    case ACCOUNTS.ACCOUNTS_GET_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        accountsInfo:{},
        errorMsg: '请求错误'
      }

    default:
      return state
  }
}


const initSelect = {
  isLoading: false,
  userTypeList:[],
  applicationList:[],
  bindUsers:null,
  bindLoading:[],
  errorMsg: ''
}

export function accountsSelect(state = initSelect, action) {
  switch (action.type) {
    case ACCOUNTS.ACCOUNTS_GET_BINDUSERS_REQUEST:
      return {
        ...state,
        bindLoading: false,
        bindUsers:[],
        errorMsg: ''
      }
    case ACCOUNTS.ACCOUNTS_GET_BINDUSERS_SUCCESS:
      return {
        ...state,
        bindLoading: true,
        bindUsers: action.result.data
      }
    case ACCOUNTS.ACCOUNTS_GET_BINDUSERS_FAIL:
      return {
        ...state,
        bindLoading: false,
        bindUsers:[],
        errorMsg: '请求错误'
      }
    case ACCOUNTS.ACCOUNTS_GET_SELECT_TYPE_REQUEST:
      return {
        ...state,
        isLoading: false,
        userTypeList:[],
        errorMsg: ''
      }
    case ACCOUNTS.ACCOUNTS_GET_SELECT_TYPE_SUCCESS:
      return {
        ...state,
        isLoading: true,
        userTypeList: action.result.data
      }
    case ACCOUNTS.ACCOUNTS_GET_SELECT_TYPE_FAIL:
      return {
        ...state,
        isLoading: false,
        userTypeList:[],
        errorMsg: '请求错误'
      }
    case ACCOUNTS.ACCOUNTS_GET_SELECT_LIST_REQUEST:
      return {
        ...state,
        isLoading: false,
        applicationList:[],
        errorMsg: ''
      }
    case ACCOUNTS.ACCOUNTS_GET_SELECT_LIST_SUCCESS:
      return {
        ...state,
        isLoading: true,
        applicationList: action.result.data
      }
    case ACCOUNTS.ACCOUNTS_GET_SELECT_LIST_FAIL:
      return {
        ...state,
        isLoading: false,
        applicationList:[],
        errorMsg: '请求错误'
      }
    default:
      return state
  }
}
