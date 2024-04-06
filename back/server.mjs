import express from 'express'

const app = express()

const port = 3000

console.log('process.cwd is', process.cwd())
console.log('path.resolve prefix is', path.resolve(__dirname))

app.use(express.static(path.resolve(__dirname, 'front/dist')))
app.get('/**', (req, res) => {
  res.sendFile(process.cwd() + '/front/dist/index.html')
})

app.listen(process.env.PORT || port, () => {
  console.log(`app listening on port ${port}, http://192.168.1.35:${port}/`)
})