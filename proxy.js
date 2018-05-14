// 在这里把所有发向cnode的请求
const axios = require('axios')
const queryString = require('query-string')
const baseUrl = 'http://172.17.80.186:8170/'

module.exports = function (req, res, next) {
  console.log('entry proxy')
  const path = req.path
  // const user = req.session.user || {}
  // const needAccessToken = req.query.needAccessToken

  // if (needAccessToken && !user.accessToken) {
  //   res.status(401).send({ // 没有登录
  //     success: false,
  //     msg: 'need login'
  //   })
  // }

  const query = Object.assign({}, req.query, {
    // accesstoken: needAccessToken && req.method === 'GET' ? user.accessToken : ''
  })
  // if (query.needAccessToken) delete query.needAccessToken

  axios(`${baseUrl}${path}`, {
    method: req.method,
    params: query,
    // 把json对象转换为json字符串，所有的请求在数据传输时传输的都是字符串形式。代理相当于中间层，这里把传进来的json对象形式的参数转换为字符串形式
    // { "accesstoken": "xxx" }
    // "{}"
    data: queryString.stringify(Object.assign({}, req.body, {
    })),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded' // cnode api 里有些支持 application/json 有些不支持; 所以都以 x-www-form-urlencode 形式
    }
  }).then(resp => {
    if (resp.status === 200) { // 原封不动的返回给客户端
      res.send(resp.data)
    } else {
      res.status(resp.status).send(resp.data)
    }
  }).catch(err => {
    if (err.response) {
      res.status(500).send(err.response.data)
    } else {
      res.status(500).send({
        success: false,
        msg: '未知错误'
      })
    }
  })
}
