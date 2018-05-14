import * as USER from '../actions/user'

/*
* 初始化state
* userInfo:用户信息
* userSearchInfo:搜索信息
* userList:用户列表
 */
const initState = {
  isLoading: false,
  userInfo:{},
  userSearchInfo:null,
  userList:null,
  addUserResult: {}
}
// export function saveParams(state = {}, action) {
//   switch(action.type){
//     case USER.SAVEPARAMUSERID:

//   }
// }
export default function reducer(state = initState, action) {
  switch (action.type) {
    case USER.GET_USER_GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        // userSearchInfo:action.searchInfo,
        userList: null
      }
    case USER.GET_USER_GET_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userList: action.result.data
      }
    case USER.GET_USER_GET_LIST_FAIL:
      return {
        ...state,
        isLoading: false,
        userList: null
      }
    case USER.GET_USER_INFO_REQUEST:
      return {
        ...state,
        isLoading: true,
        userInfo: {}
      }
    case USER.GET_USER_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: action.result.data
      }
    case USER.GET_USER_INFO_FAIL:
      return {
        ...state,
        isLoading: false,
        userInfo:{}
      }
    // 新增个人用户
    case USER.ADD_PERSENAL_USER_REQUEST:
      return {
        ...state,
        isLoading:true
      }
    case USER.ADD_PERSENAL_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        addUserResult: action.result.data
      }
    case USER.ADD_PERSENAL_USER_FAIL:
      return {
        ...state,
        isLoading: false
      }
    // 绑卡列表
    case USER.GET_BIND_CARD_LIST_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case USER.GET_BIND_CARD_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        bindCardList: action.result.data
      }
    case USER.GET_BIND_CARD_LIST_FAIL:
      return {
        ...state,
        isLoading: false
      }
    case USER.SAVEPARAMUSERID:
      return {
        ...state,
        isLoading: false,
        saveParams: action.value
      }
    default:
      return state
  }
}
