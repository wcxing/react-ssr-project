import axios from 'axios'

axios.defaults.transformRequest = [function (data) {
  let newData = ''
  for (let k in data) {
    newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
  }
  return newData
}]

axios.interceptors.request.use(function (config) {
  config.baseURL = 'http://172.17.80.186:8170/'
  config.proxy = {
    host: 'localhost',
    post: '3000'
  }
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded' // 设置请求首部字段 content-type
  return config
})

export default store => next => action => {
  const { dispatch, getState } = store
  /*如果dispatch来的是一个function，此处不做处理，直接进入下一级*/

  if (typeof action === 'function') {
    action(dispatch, getState)
    return
  }
  /*解析action*/
  const {
    promise,
    types,
    afterSuccess,
    ...rest
  } = action

  /*没有promise，证明不是想要发送ajax请求的，就直接进入下一步啦！*/
  if (!action.promise) {
    return next(action)
  }

  /*解析types*/
  const [REQUEST,
    SUCCESS,
    FAILURE] = types

  /*开始请求的时候，发一个action*/
  next({
    ...rest,
    type: REQUEST
  })
  /*定义请求成功时的方法*/
  const onFulfilled = result => {
    //判断是否登录
    if(result.data.retCode=='P10'){
      location.replace('/login')
    }
    next({
      ...rest,
      result,
      type: SUCCESS
    })
    if (afterSuccess) {
      afterSuccess(dispatch, getState, result)
    }
    // 可以在调用接口后使用then方法获取请求结果
    return new Promise((reslove, reject) => {
      reslove(result)
    })
  }
  /*定义请求失败时的方法*/
  const onRejected = error => {
    next({
      ...rest,
      error,
      type: FAILURE
    })
  }

  return promise(axios).then(onFulfilled, onRejected).catch(error => {
    console.error('MIDDLEWARE ERROR:', error)
    onRejected(error)
  })
}
