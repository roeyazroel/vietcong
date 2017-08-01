const express = require('express')
const app = express()

app.get('/file1', function (req, res) {
  res.sendFile(__dirname +'/files/50KB.mp4')
})

app.get('/file2', function (req, res) {
  res.sendFile(__dirname +'/files/0.1MB.mp4')
})

app.get('/file3', function (req, res) {
  res.sendFile(__dirname +'/files/0.5MB.mp4')
})

app.get('/file4', function (req, res) {
  res.sendFile(__dirname +'/files/1MB.gif')
})

app.get('/file5', function (req, res) {
  res.sendFile(__dirname +'/files/2MB.gif')
})

app.get('/file6', function (req, res) {
  res.sendFile(__dirname +'/files/4MB.gif')
})

app.get('*', function (req, res) {
  res.send('Hello')
})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.all('*', allowCrossDomain);


function allowCrossDomain(req, res, next) {
    if (req.method == 'GET') {
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Set-Cookie, x-api-key, x-user-uuid, x-is-native');
        res.header('Access-Control-Allow-Methods', 'GET');
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Credentials', true);
    } else {
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Set-Cookie, x-api-key, x-user-uuid, x-is-native');
        res.header('Access-Control-Allow-Methods', 'POST, PUT, DELETE');
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Credentials', true);
    }
    next();
}

/*
הכי טוב לעשות כמה בדיקות:

100KB
0.5MB
1MB
2MB
4MB
*/