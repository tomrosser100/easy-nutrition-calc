import express from 'express'

const app = express()

const port = 3000

//console.log('process.cwd is', process.cwd())

console.log('dirname:', __dirname)
console.log('process.cwd:', process.cwd())
console.log('full path:', path.join(__dirname, 'front/dist', 'index.html'))

app.use(express.static(process.cwd() + 'front/dist'))
app.get('/**', function (req, res) {
  const index = path.join(__dirname, 'front/dist', 'index.html');
  res.sendFile(index);
});

app.listen(process.env.PORT)