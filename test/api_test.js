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
  test('Correct api call to a city', (assert) => {
    request(app)
    .get('/api/cities/monterrey')
    .expect(200)
    .end((err, res) => {
      const body = res.body
      assert.same([], body)
      assert.end()
    })
  })
  test('Correct api call to a city in a year', (assert) => {
    request(app)
    .get('/api/cities/monterrey/1977')
    .expect(200)
    .end((err, res) => {
      const body = res.body
      assert.same([], body)
      assert.end()
    })
  })
}
