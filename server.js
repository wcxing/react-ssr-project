const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  // server.use('/merchantplatform/*', require('./proxy'))

  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = {
      title: req.params.id
    }
    console.log(11111,req.params)
    app.render(req, res, actualPage, queryParams)
  })
  // login
  server.get('/login', (req, res) => {
    console.log('login')
    const actualPage = '/login'
    app.render(req, res, actualPage)
    // return handle(req, res)
  })
  server.get('*', (req, res) => {
    // console.log('****')
    return handle(req, res)
  })

  server.listen(4444, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:4444')
  })
}).catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
