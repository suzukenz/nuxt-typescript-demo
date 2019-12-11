const express = require('express')
const request = require('request')

const app = express()

// この場合 localhost:8080/api/~~ とリクエストするとこのserverが受ける
const rootPath = '/api'
// 実際のエンドポイントを入力
const actualEndpoint = process.env.ENDPOINT || 'https://example.com/v1'

const requestWrapper = async (options) => {
  const result = await new Promise((resolve, reject) => {
    request(options, (err, response) => {
      if (err) {
        reject(err)
      }
      if (!response) {
        reject(err, 'Nothing response')
      }
      resolve(response)
    })
  })
  return result
}

app.all('/*', async (req, res) => {
  console.log(`original url: ${req.originalUrl}`)
  const options = {
    url: actualEndpoint + req.originalUrl.replace(rootPath, ''),
    method: req.method,
    qs: req.query,
    json: req.body
  }

  console.log('request with following options.')
  console.log(options)

  const response = await requestWrapper(options)

  res.status(response.statusCode).send(response.body)
})

// for Nuxt.js server middleware
module.exports = {
  path: rootPath,
  handler: app
}
