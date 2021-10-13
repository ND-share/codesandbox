import express from 'express'
const app = express()

app.get('/date', (req, res) => {
  res.status(200).json({ date: new Date() })
})

export default {
  path: '/api',
  handler: app,
}
