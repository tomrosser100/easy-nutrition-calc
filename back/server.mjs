import express from 'express'

const app = express()

app.use(express.static(process.cwd() + '/front/dist'))

app.get('/**', function (req, res) {
  res.sendFile(process.cwd() + '/front/dist/index.html')
})

app.listen(process.env.PORT)