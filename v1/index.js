const express = require('express')
const app = express()
const port = 3000

app.use(function (req, res, next) {
  res.setHeader('Strict-Transport-Security', "max-age=31536000; includeSubDomains always")
  res.setHeader('X-Frame-Options', "SAMEORIGIN")
  res.setHeader('X-Content-Type-Options', "nosniff")
  res.setHeader('X-XSS-Protection', "1; mode=block")
  res.setHeader('Referrer-Policy', "strict-origin")
  res.setHeader('Content-Security-Policy', "default-src 'self'; script-src 'self'; style-src 'self'; font-src 'self'; img-src 'self'; frame-src 'self'");
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})