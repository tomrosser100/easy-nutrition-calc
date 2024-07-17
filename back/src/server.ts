import express from 'express'
import sslRedirect from 'heroku-ssl-redirect'

const app = express()

app.use(express.static(process.cwd() + '/front/dist'))
app.use(sslRedirect())

app.get('/**', function (req, res) {
  res.sendFile(process.cwd() + '/front/dist/index.html')
})

console.log(`http://192.168.1.35:${process.env.PORT}/`)

app.listen(process.env.PORT)