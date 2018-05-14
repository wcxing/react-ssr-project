import { UPDATE_USER_PASS_REQUEST, UPDATE_USER_PASS_SUCCESS, UPDATE_USER_PASS_FAIL } from '../actions/userUppass'

/*
* 初始化state
* userPassType:返回结果
 */
const initState = {
  isLoading: false,
  userPassType:false,
  errorMsg: ''
}

/*
* reducer
 */
export default function reducer(state = initState, action) {
  switch (action.type) {
    case UPDATE_USER_PASS_REQUEST:
      return {
        ...state,
        isLoading: false,
        userPassType:false,
        errorMsg: ''
      }
    case UPDATE_USER_PASS_SUCCESS:
      return {
        ...state,
        isLoading: true,
        userPassType: action.result.data
      }
    case UPDATE_USER_PASS_FAIL:
      return {
        ...state,
        isLoading: false,
        userPassType:false,
        errorMsg: '请求错误'
      }
    default:
      return state
  }
}
