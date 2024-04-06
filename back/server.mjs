import express from 'express'

const app = express()

const port = 3000

app.use(express.static(process.cwd() + 'front/dist'))
app.get('/**', (req, res) => {
  res.sendFile(process.cwd() + '/front/dist/index.html')
})

app.listen(process.env.PORT || port, () => {
  console.log(`app listening on port ${port}, http://192.168.1.35:${port}/`)
})