import express from 'express'

const domain = 'easynutritioncalc.com'
const app = express()

app.use((req, res) => {
  res.redirect(301, 'https://' + domain + req.url);
})

app.use(express.static(process.cwd() + '/front/dist'))

app.get('/**', function (req, res) {
  res.sendFile(process.cwd() + '/front/dist/index.html')
})

console.log(`http://192.168.1.35:${process.env.PORT}/`)

app.listen(process.env.PORT)