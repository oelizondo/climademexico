const test = require('tape')
const request = require('supertest')

module.exports = (app) => {
  test('Correct api call', (assert) => {
    request(app)
    .get('/api/cities')
    .expect(200)
    .end((err, res) => {
      const body = res.body
      assert.same([], body)
      assert.end()
    })
  })
}