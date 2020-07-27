import express from 'express'

const route = express.Router()

route.get('/route', (req, res) => {
  res.send('<h1>A generic route</h1>')
})

route.get('/route-with-json', async (req, res) => {
  // simulate an async op
  const data = await new Promise((resolve) =>
    setTimeout(() => {
      return resolve({ data: 'some data' })
    }, 2000)
  )

  res.send(data)
})

export default route
