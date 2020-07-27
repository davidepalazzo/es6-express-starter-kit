import request from 'supertest'

import server from '../../index'

describe('Route', () => {
  it('should have a status of 200', (done) => {
    request(server).get('/route').expect(200, done)
  })

  it('should have a data object in the body', async (done) => {
    const { body } = await request(server).get('/route-with-json')

    expect(body?.data).toBeTruthy()
    done()
  })
})
