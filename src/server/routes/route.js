import express from 'express'

const route = express.Router()

route.get('/route', (req, res) => {
  res.send('<h1>A generic route</h1>')
})

export default route
