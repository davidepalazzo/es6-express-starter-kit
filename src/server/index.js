import express from 'express'
import bodyParser from 'body-parser'

import route from './routes/route'
import * as config from '../shared/config'
import { isProd } from '../shared/util'

const server = express()

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

server.use(route)

server.get('/', (req, res) => {
  res.send(`
    <h1>Server running in ${isProd ? 'production' : 'development'} mode.</h1>
    <a href="/route">check out a generic route</a>
  `)
})


server.listen(config.port, () => {
  // eslint-disable-next-line no-console
  console.log(`🏎  Server running on port ${config.port} - ${isProd ? 'production' : 'development'} mode.`)
})
