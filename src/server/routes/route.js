import express from 'express'

const route = express.Router()

route.get('/route', (req, res, next) => {
  res.send('<h1>A generic route</h1>')
  next()
})

export default route
