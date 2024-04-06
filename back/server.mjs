import express from 'express'


const app = express()

const port = 3000

//console.log('process.cwd is', process.cwd())

app.use(process.cwd(), express.static('front/dist'))
app.get('/**', (req, res) => {
  res.sendFile(process.cwd() + '/front/dist/index.html')
})

app.listen(process.env.PORT)