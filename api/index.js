const express = require('express')
const app = express()

app.get('/date', (req, res) => {
  res.status(200).json({ date: new Date() })
})

module.exports = {
  path: '/api',
  handler: app,
}
