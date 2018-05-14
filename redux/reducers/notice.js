import * as NOTICE from '../actions/notice'

/*
* 初始化state
* noticeType:公告分类,
* noticeList:公告数据,
* noticeInfo:详情
 */
const initState = {
  isLoading: false,
  noticeIsType:false,
  noticeType:{},
  noticeList:{},
  noticeInfo:{},
  errorMsg: ''
}


export default function reducers(state = initState, action) {
  switch (action.type) {
    case NOTICE.GET_NOTICE_REQUEST:
      return {
        ...state,
        isLoading: false,
        noticeList:{},
        errorMsg: ''
      }
    case NOTICE.GET_NOTICE_SUCCESS:
      return {
        ...state,
        isLoading: true,
        noticeList:action.result.data
      }
    case NOTICE.GET_NOTICE_FAIL:
      return {
        ...state,
        isLoading: false,
        noticeList:{},
        errorMsg: '请求错误'
      }
    case NOTICE.GET_NOTICE_SELECT_REQUEST:
      return {
        ...state,
        noticeIsType:false,
        noticeType:{},
        errorMsg: ''
      }
    case NOTICE.GET_NOTICE_SELECT_SUCCESS:
      return {
        ...state,
        noticeIsType:true,
        noticeType:action.result.data
      }
    case NOTICE.GET_NOTICE_SELECT_FAIL:
      return {
        ...state,
        noticeIsType:false,
        noticeType:{},
        errorMsg: '请求错误'
      }
    case NOTICE.GET_NOTICE_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: false,
        noticeInfo:{},
        errorMsg: ''
      }
    case NOTICE.GET_NOTICE_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: true,
        noticeInfo:action.result.data
      }
    case NOTICE.GET_NOTICE_DETAIL_FAIL:
      return {
        ...state,
        isLoading: false,
        noticeInfo:{},
        errorMsg: '请求错误'
      }
    default:
      return state
  }
}

