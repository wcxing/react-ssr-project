import tokenAdd from './tokenAdd'

export const GET_NOTICE_REQUEST = 'notice/GET_NOTICE_REQUEST'
export const GET_NOTICE_SUCCESS = 'notice/GET_NOTICE_SUCCESS'
export const GET_NOTICE_FAIL = 'notice/GET_NOTICE_FAIL'

export const GET_NOTICE_SELECT_REQUEST = 'notice/GET_NOTICE_SELECT_REQUEST'
export const GET_NOTICE_SELECT_SUCCESS = 'notice/GET_NOTICE_SELECT_SUCCESS'
export const GET_NOTICE_SELECT_FAIL = 'notice/GET_NOTICE_SELECT_FAIL'

export const GET_NOTICE_DETAIL_REQUEST = 'notice/GET_NOTICE_DETAIL_REQUEST'
export const GET_NOTICE_DETAIL_SUCCESS = 'notice/GET_NOTICE_DETAIL_SUCCESS'
export const GET_NOTICE_DETAIL_FAIL = 'notice/GET_NOTICE_DETAIL_FAIL'


//获取公告类型
export function getNoticeSelect(item) {
  return {
    types: [GET_NOTICE_SELECT_REQUEST, GET_NOTICE_SELECT_SUCCESS, GET_NOTICE_SELECT_FAIL],
    promise: client => client.get('/merchantplatform/getNoticeType', tokenAdd(item))
  }
}
//获取公告列表
export function getNoticeList(item) {
  return {
    types: [GET_NOTICE_REQUEST, GET_NOTICE_SUCCESS, GET_NOTICE_FAIL],
    promise: client => client.post('/merchantplatform/announcementInfo/list', tokenAdd(item))
  }
}
//获取详情
export function getNoticeDetail(announceCode) {
  return {
    types: [GET_NOTICE_DETAIL_REQUEST, GET_NOTICE_DETAIL_SUCCESS, GET_NOTICE_DETAIL_FAIL],
    promise: client => client.get('/merchantplatform/announcementInfo/'+announceCode, {params:tokenAdd()})
  }
}

