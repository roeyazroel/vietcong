const express = require('express')
const app = express()

app.get('/file1', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.sendFile(__dirname +'/files/50KB.mp4')
})

app.get('/file2', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.sendFile(__dirname +'/files/0.1MB.mp4')
})

app.get('/file3', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.sendFile(__dirname +'/files/0.5MB.mp4')
})

app.get('/file4', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.sendFile(__dirname +'/files/1MB.gif')
})

app.get('/file5', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.sendFile(__dirname +'/files/2MB.gif')
})

app.get('/file6', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.sendFile(__dirname +'/files/4MB.gif')
})

app.get('/file7', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.send('https://media.giphy.com/media/3o8dFi2cJD5ZQwmfxS/giphy.gif')
})

app.get('/file8', function (req, res) {
  res.header('Access-Control-Allow-Origin', '*');
  res.send('https://media.giphy.com/media/3o8dFEl4Az3mUqvrkk/giphy.gif')
})

app.get('*', function (req, res) {
  res.send('Hello')
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

/*
הכי טוב לעשות כמה בדיקות:

100KB
0.5MB
1MB
2MB
4MB
*/